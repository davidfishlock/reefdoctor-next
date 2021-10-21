import { Category, UVCLevel } from '@prisma/client'
import { constants } from 'http2'
import { mock } from 'jest-mock-extended'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { strings } from '../../../../constants/strings'
import handler, {
    MAX_NA_ITEMS_COUNT,
    QUESTION_COUNT,
} from '../../../../pages/api/tutorial'
import { Question, TutorialSessionType } from '../../../../types/tutorial'
import { getImagePathForSpecies } from '../../../../utils/species'
import { hasNAItems } from '../../../../utils/uvcDefinitions'
import { prismaMock } from '../../../../__mocks__/prisma/client'
import { defaultSpecies, tutorialTheories } from '../../../testData'

const normalSpecies = Array.from({ length: 50 }, (_, index) => ({
    ...defaultSpecies,
    uvcLevel: UVCLevel.Indicator,
    id: index,
}))
const naSpecies = Array.from({ length: 10 }, (_, index) => ({
    ...defaultSpecies,
    uvcLevel: UVCLevel.NA,
    id: index + 50,
}))

const request = mock<NextApiRequest>({
    method: 'GET',
    query: {
        category: Category.Fish,
        uvcLevel: UVCLevel.Indicator,
        sessionType: TutorialSessionType.Workshop,
    },
})

const response = mock<NextApiResponse>({
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn(),
})

function assertCorrectSpeciesQuery(category: Category, uvcLevel: UVCLevel) {
    const expectedQuery =
        uvcLevel === UVCLevel.Expert
            ? {
                  category: category,
                  OR: [
                      {
                          uvcLevel: UVCLevel.Indicator,
                      },
                      { uvcLevel: UVCLevel.Expert },
                  ],
              }
            : {
                  category: category,
                  uvcLevel: uvcLevel,
              }

    expect(prismaMock.species.findMany).toBeCalledWith({
        where: expectedQuery,
    })
}

function assertExpectedQuestions(
    category: Category,
    uvcLevel: UVCLevel,
    sessionType: TutorialSessionType,
    questions: Question[]
) {
    if (uvcLevel === UVCLevel.NA) {
        expect(questions.length).toEqual(QUESTION_COUNT)
        return
    } else {
        const isNAExpected =
            hasNAItems(category) && sessionType === TutorialSessionType.Quiz
        const expectedNASpecies = isNAExpected ? MAX_NA_ITEMS_COUNT : 0
        const expectedNormalSpecies = QUESTION_COUNT - expectedNASpecies

        expect(
            questions.filter(
                (question) => question.species.uvcLevel === UVCLevel.Indicator
            ).length
        ).toEqual(expectedNormalSpecies)
        expect(
            questions.filter(
                (question) => question.species.uvcLevel === UVCLevel.NA
            ).length
        ).toEqual(expectedNASpecies)
    }

    questions.forEach((question) => {
        expect(question.species).toBeTruthy()
        expect(
            question.imageUri.startsWith(
                getImagePathForSpecies(question.species)
            )
        ).toEqual(true)
        expect(path.parse(question.imageUri).ext).toEqual('.jpg')
        expect(
            parseInt(path.parse(question.imageUri).name)
        ).toBeLessThanOrEqual(question.species.imageCount)
    })
}

describe('tutorial api handler', () => {
    beforeEach(() => {
        prismaMock.species.findMany
            .mockResolvedValueOnce(normalSpecies)
            .mockResolvedValueOnce(naSpecies)
    })

    test('returns expected status if method unsupported', async () => {
        await handler({ ...request, method: 'POST' }, response)

        expect(response.status).toBeCalledTimes(1)
        expect(response.status).toBeCalledWith(
            constants.HTTP_STATUS_METHOD_NOT_ALLOWED
        )
        expect(response.send).toBeCalledTimes(1)
        expect(response.send).toBeCalledWith(
            strings.API_ERROR_METHOD_UNSUPPORTED
        )
    })

    test('returns bad request status if invalid query', async () => {
        await handler(
            {
                ...request,
                query: {
                    category: 'invalid',
                    uvcLevel: 'invalid',
                    sessionType: 'invalid',
                },
            },
            response
        )

        expect(response.status).toBeCalledTimes(1)
        expect(response.status).toBeCalledWith(
            constants.HTTP_STATUS_BAD_REQUEST
        )
        expect(response.send).toBeCalledTimes(1)
        expect(response.send).toBeCalledWith(strings.API_ERROR_INVALID_QUERY)
    })

    test.each(tutorialTheories)(
        'requests correct species from database for UVCLevel %p',
        async ({ category, uvcLevel, sessionType }) => {
            await handler(
                {
                    ...request,
                    query: {
                        category,
                        uvcLevel,
                        sessionType,
                    },
                },
                response
            )

            const questions = response.json.mock.calls[0][0].questions

            assertCorrectSpeciesQuery(category, uvcLevel)
            assertExpectedQuestions(category, uvcLevel, sessionType, questions)
        }
    )
})

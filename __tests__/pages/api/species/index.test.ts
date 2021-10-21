import { Category, UVCLevel } from '@prisma/client'
import { constants } from 'http2'
import { mock } from 'jest-mock-extended'
import { NextApiRequest, NextApiResponse } from 'next'
import { strings } from '../../../../constants/strings'
import handler from '../../../../pages/api/species'
import { prismaMock } from '../../../../__mocks__/prisma/client'
import { defaultSpecies } from '../../../testData'

const species = [{ ...defaultSpecies }]

const request = mock<NextApiRequest>({
    method: 'GET',
    query: { category: Category.Fish, uvcLevel: UVCLevel.Indicator },
})

const response = mock<NextApiResponse>({
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn(),
})

describe('species api handler', () => {
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
            { ...request, query: { category: 'invalid', uvcLevel: 'invalid' } },
            response
        )

        expect(response.status).toBeCalledTimes(1)
        expect(response.status).toBeCalledWith(
            constants.HTTP_STATUS_BAD_REQUEST
        )
        expect(response.send).toBeCalledTimes(1)
        expect(response.send).toBeCalledWith(strings.API_ERROR_INVALID_QUERY)
    })

    test('calls prisma client with relevant search criteria and returns results', async () => {
        prismaMock.species.findMany.mockResolvedValue(species)

        await handler({ ...request }, response)

        expect(prismaMock.species.findMany).toBeCalledTimes(1)
        expect(prismaMock.species.findMany).toBeCalledWith({
            where: {
                category: request.query.category,
                uvcLevel: request.query.uvcLevel,
            },
        })
        expect(response.json).toBeCalledTimes(1)
        expect(response.json).toBeCalledWith(species)
    })
})

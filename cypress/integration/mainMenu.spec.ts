/// <reference path="../support/index.d.ts" />
import { Category, UVCLevel } from '@prisma/client'
import { CATALOG, HOMEPAGE, TUTORIAL } from '../../constants/clientRoutes'
import { HAS_SEEN_FTU_KEY } from '../../constants/storage'
import { testId } from '../../constants/testId'
import { TutorialSessionType } from '../../types/tutorial'
import { getStringForCategory } from '../../utils/strings'
import { tutorialTheories } from '../../__tests__/testData'
import { setupTutorialStubs } from '../fixtures/tutorial/tutorialStubs'

function startWorkshop(
    category: Category,
    sessionType: TutorialSessionType,
    uvcLevel: UVCLevel
) {
    cy.testId(testId.MAIN_MENU_ITEM)
        .contains(getStringForCategory(category))
        .parent('div')
        .within(() => {
            const buttonId =
                sessionType === TutorialSessionType.Workshop
                    ? testId.MAIN_MENU_WORKSHOP_BUTTON
                    : testId.MAIN_MENU_QUIZ_BUTTON
            cy.testId(buttonId).click()
        })

    if (uvcLevel != UVCLevel.NA) {
        cy.contains(uvcLevel).click()
    }
}

describe('Main Menu', () => {
    beforeEach(() => {
        setupTutorialStubs()
        cy.visit(HOMEPAGE, {
            onBeforeLoad: function (window) {
                window.localStorage.setItem(HAS_SEEN_FTU_KEY, 'true')
            },
        })
    })

    it('loads successfully', () => {})

    it('opens the species browser', () => {
        cy.testId(testId.MAIN_MENU_CATALOG_BUTTON).click()
        cy.assertNavigation(CATALOG)
    })

    tutorialTheories.forEach((tutorial) => {
        const { category, uvcLevel, sessionType } = tutorial[0]

        it(`launches tutorial session ${category}, ${sessionType}, ${uvcLevel}`, () => {
            startWorkshop(category, sessionType, uvcLevel)
            cy.assertNavigation(
                TUTORIAL,
                `?sessionType=${sessionType}&category=${category}&uvcLevel=${uvcLevel}`
            )
        })
    })
})

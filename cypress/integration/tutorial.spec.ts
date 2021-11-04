/// <reference path="../support/index.d.ts" />
import { TUTORIAL } from '../../constants/clientRoutes'
import {
    HAS_SEEN_QUIZ_KEY,
    HAS_SEEN_WORKSHOP_KEY,
} from '../../constants/storage'
import { strings } from '../../constants/strings'
import { testId } from '../../constants/testId'
import { repeat } from '../../utils/array'
import { setupTutorialStubs } from '../fixtures/tutorial/tutorialStubs'

const QUESTION_COUNT = 20

function goToLastQuestion() {
    repeat(QUESTION_COUNT - 1, () => cy.testId(testId.CAROUSEL_NEXT).click())
    assertQuestionPresented(QUESTION_COUNT)
}

function assertQuestionPresented(questionNumber: number) {
    cy.get(`[alt="Question ${questionNumber} Image"]`).should('be.visible')

    cy.testId(testId.TUTORIAL_QUESTION_NUMBER).should(
        'have.text',
        `Question ${questionNumber} of 20`
    )
}

describe('Tutorial', () => {
    beforeEach(() => {
        setupTutorialStubs()
        cy.visit(
            `${TUTORIAL}?sessionType=Workshop&category=Fish&uvcLevel=Indicator`,
            {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem(HAS_SEEN_QUIZ_KEY, 'true')
                    window.localStorage.setItem(HAS_SEEN_WORKSHOP_KEY, 'true')
                },
            }
        )
    })

    it('loads successfully', () => {})

    it('shows the first question', () => {
        assertQuestionPresented(1)
    })

    it('moves forward and back with navigation buttons', () => {
        assertQuestionPresented(1)

        cy.testId(testId.CAROUSEL_NEXT).click()

        assertQuestionPresented(2)

        cy.testId(testId.CAROUSEL_PREVIOUS).click()

        assertQuestionPresented(1)
    })

    it('shows answer for the current item and hides answer on question change', () => {
        cy.testId(testId.TUTORIAL_SHOW_CURRENT_ANSWER).click()
        cy.testId(testId.TUTORIAL_CURRENT_ANSWER).should(
            'have.text',
            'Bluespine Unicornfish'
        )

        cy.testId(testId.CAROUSEL_NEXT).click()

        cy.testId(testId.TUTORIAL_CURRENT_ANSWER).should('not.exist')
    })

    it('shows and hides species details', () => {
        cy.testId(testId.TUTORIAL_SHOW_DETAILS).click()

        cy.testId(testId.MODAL).within(() => {
            cy.get('header').should('have.text', 'Bluespine Unicornfish')
        })

        cy.get('ul').children().should('have.length', 9)

        cy.get(`[aria-label="Close"]`).click()
        cy.testId(testId.MODAL).should('not.exist')
    })

    it('can show and hide all answers when on last question', () => {
        goToLastQuestion()

        cy.testId(testId.TUTORIAL_SHOW_ALL_ANSWERS).click()

        cy.get('h2').should('have.text', strings.TUTORIAL_ANSWERS)
        cy.get('ol').children().should('have.length', QUESTION_COUNT)

        cy.testId(testId.TUTORIAL_BACK_TO_QUESTIONS).click()

        assertQuestionPresented(QUESTION_COUNT)
    })

    it('can complete tutorial by navigating back', () => {
        goToLastQuestion()

        cy.testId(testId.TUTORIAL_SHOW_ALL_ANSWERS).click()
        cy.testId(testId.TUTORIAL_COMPLETE).click()

        cy.assertNavigation('blank')
    })
})

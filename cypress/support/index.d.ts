/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Select DOM element by data-testid attribute.
         * @example cy.testId('myElement')
         */
        testId(id: string): Chainable<Element>

        /**
         * Assert that browser was navigated to url with optional query.
         * @example cy.assertNavigation('/wherever', '?value=somevalue)
         */
        assertNavigation(url: string, query?: string): Chainable<Location>
    }
}

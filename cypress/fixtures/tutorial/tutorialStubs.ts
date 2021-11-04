export function setupTutorialStubs() {
    cy.intercept('/api/tutorial*', {
        fixture: 'tutorial/tutorial.json',
    }).as('tutorialRequest')
}

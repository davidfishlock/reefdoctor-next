const testId = (id: string) => cy.get(`[data-testid=${id}]`)

const assertNavigation = (url: string, query?: string) => {
    cy.location('pathname').should('eq', url)

    if (query) {
        cy.location('search').should('eq', query)
    }
}

const commands = [testId, assertNavigation]

commands.forEach((command) => Cypress.Commands.add(command.name, command))

export {}

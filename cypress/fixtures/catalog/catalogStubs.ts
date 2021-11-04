export function setupCatalogAPIStubs() {
    cy.intercept('/api/species?category=Fish&uvcLevel=Indicator', {
        fixture: 'catalog/indicatorFish.json',
    }).as('indicatorFishRequest')
    cy.intercept('/api/species?category=Fish&uvcLevel=Expert', {
        fixture: 'catalog/expertFish.json',
    }).as('expertFishRequest')
    cy.intercept('/api/species?category=Coral&uvcLevel=NA', {
        fixture: 'catalog/coral.json',
    }).as('coralRequest')
}

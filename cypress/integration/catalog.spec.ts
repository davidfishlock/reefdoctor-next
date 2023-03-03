/// <reference path="../support/index.d.ts" />
import { Category, UVCLevel } from '@prisma/client'
import { CATALOG } from '../../constants/clientRoutes'
import { testId } from '../../constants/testId'
import { getStringForCategory } from '../../utils/strings'
import { setupCatalogAPIStubs } from '../fixtures/catalog/catalogStubs'

describe('Species Catalog', () => {
    beforeEach(() => {
        setupCatalogAPIStubs()
        cy.visit(CATALOG)
        cy.wait('@indicatorFishRequest')
    })

    it('loads successfully', () => {})

    it('shows the first indicator fish by default', () => {
        cy.testId(testId.CATALOG_SPECIES_DETAILS).within(() => {
            cy.get('h2').should('have.text', 'African White Spotted Rabbitfish')
            cy.get('ul').children().should('have.length', 6)
        })

        cy.testId(testId.CATALOG_SPECIES_THUMBNAILS)
            .children()
            .should('have.length', 4)
    })

    it('can select another species', () => {
        const speciesName = 'Bluebarred Parrotfish'
        cy.get('li').contains(speciesName).click()

        cy.get('h2').contains(speciesName)
    })

    it('can select UVC level', () => {
        cy.testId(testId.CATALOG_UVC_SELECT).select(UVCLevel.Expert)

        cy.wait('@expertFishRequest')

        cy.get('h2').contains('Barred Thicklip Wrasse')
    })

    it('can select Category', () => {
        cy.testId(testId.CATALOG_CATEGORY_SELECT).select(
            getStringForCategory(Category.Coral)
        )

        cy.wait('@coralRequest')

        cy.get('h2').contains('Acanthastrea')
    })
})

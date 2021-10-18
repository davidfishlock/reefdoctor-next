import Head from 'next/head'
import SpeciesCatalog from '../components/species_catalog/SpeciesCatalog'
import { strings } from '../constants/strings'
import { CatalogProvider } from '../contexts/CatalogContext'
import { Page } from '../types/page'

const Catalog: Page = () => {
    return (
        <>
            <Head>
                <title>{strings.SPECIES_CATALOG_TITLE}</title>
                <meta
                    name="description"
                    content={strings.SPECIES_CATALOG_DESCRIPTION}
                />
            </Head>
            <CatalogProvider>
                <SpeciesCatalog />
            </CatalogProvider>
        </>
    )
}

Catalog.layout = 'full'

export default Catalog

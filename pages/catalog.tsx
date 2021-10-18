import Head from 'next/head'
import SpeciesCatalog from '../components/speciesCatalog/SpeciesCatalog'
import { strings } from '../consts/Strings'
import { CatalogProvider } from '../contexts/CatalogContext'
import { Page } from '../types/Page'

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

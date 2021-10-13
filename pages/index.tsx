import type { NextPage } from 'next'
import { SimpleGrid } from '@chakra-ui/react'
import MainMenuItem from '../components/main-menu/MainMenuItem'
import Head from 'next/head'
import { strings } from '../consts/strings'
import { Category } from '@prisma/client'

const menuItems = [
    {
        image: '/images/menu-items/catalog.png',
        title: strings.SPECIES_CATALOG,
        isCatalog: true,
    },
    {
        image: '/images/menu-items/fish.jpg',
        title: strings.CATEGORY_FISH,
        category: Category.Fish,
    },
    {
        image: '/images/menu-items/invertebrate.jpg',
        title: strings.CATEGORY_INVERTEBRATE,
        category: Category.Invertebrate,
    },
    {
        image: '/images/menu-items/benthic.jpg',
        title: strings.CATEGORY_BENTHIC,
        category: Category.Benthic,
    },
    {
        image: '/images/menu-items/fish-families.jpg',
        title: strings.CATEGORY_FISH_FAMILIES,
        category: Category.FishFamily,
    },
    {
        image: '/images/menu-items/coral.jpg',
        title: strings.CATEGORY_CORAL,
        category: Category.Coral,
    },
    {
        image: '/images/menu-items/seagrass.jpg',
        title: strings.CATEGORY_SEAGRASS,
        category: Category.Seagrass,
    },
]

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{strings.HOMEPAGE_TITLE}</title>
                <meta
                    name="description"
                    content={strings.HOMEPAGE_DESCRIPTION}
                />
            </Head>
            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={3} mt={3}>
                {menuItems.map((item) => {
                    return (
                        <MainMenuItem
                            key={item.title}
                            image={item.image}
                            title={item.title}
                            category={item.category}
                            isCatalog={item.isCatalog}
                        />
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default Home

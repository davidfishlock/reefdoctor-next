import { Category } from '@prisma/client'
import Head from 'next/head'
import { AnimatedSimpleGrid } from '../components/common/Animation'
import CategoryMenuItem from '../components/mainMenu/CategoryMenuItem'
import SpeciesCatalogMenuItem from '../components/mainMenu/SpeciesCatalogMenuItem'
import { strings } from '../consts/Strings'
import { Page } from '../types/Page'

const categoryItems = [
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

const Home: Page = () => {
    return (
        <>
            <Head>
                <title>{strings.HOMEPAGE_TITLE}</title>
                <meta
                    name="description"
                    content={strings.HOMEPAGE_DESCRIPTION}
                />
            </Head>
            <AnimatedSimpleGrid
                initial="hidden"
                animate="show"
                columns={{ base: 1, md: 2, xl: 3 }}
                spacing={{ base: 4, xl: 4 }}
            >
                <SpeciesCatalogMenuItem />
                {categoryItems.map((item) => {
                    return (
                        <CategoryMenuItem
                            key={item.category}
                            image={item.image}
                            title={item.title}
                            category={item.category}
                        />
                    )
                })}
            </AnimatedSimpleGrid>
        </>
    )
}

export default Home

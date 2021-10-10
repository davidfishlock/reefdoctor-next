import type { NextPage } from 'next'
import { Box, SimpleGrid } from '@chakra-ui/react'
import MainMenuItem from '../components/MainMenuItem'
import Head from 'next/head'

const menuItems = [
    {
        image: '/images/menu-items/catalog.png',
        title: 'Species Catalog',
        isCatalog: true,
    },
    { image: '/images/menu-items/fish.jpg', title: 'Fish', categoryId: 1 },
    {
        image: '/images/menu-items/invertebrate.jpg',
        title: 'Invertebrate',
        categoryId: 2,
    },
    {
        image: '/images/menu-items/benthic.jpg',
        title: 'Benthic',
        categoryId: 3,
    },
    {
        image: '/images/menu-items/fish-families.jpg',
        title: 'Fish Families',
        categoryId: 4,
    },
    { image: '/images/menu-items/coral.jpg', title: 'Coral', categoryId: 5 },
    {
        image: '/images/menu-items/seagrass.jpg',
        title: 'Seagrass',
        categoryId: 6,
    },
    {
        image: '/images/menu-items/juvenile.jpg',
        title: 'Juvenile Fish',
        categoryId: 7,
    },
]

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>ReefDoctor | UVC Training - Main Menu</title>
                <meta
                    name="description"
                    content="The main menu for ReefDoctor's UVC training. Browse information and images in the marine species catalog, or start an identification training workshop for each of the species categories."
                />
            </Head>
            <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={3} mt={3}>
                {menuItems.map((item) => {
                    return (
                        <MainMenuItem
                            key={item.title}
                            image={item.image}
                            title={item.title}
                            categoryId={item.categoryId}
                            isCatalog={item.isCatalog}
                        />
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default Home

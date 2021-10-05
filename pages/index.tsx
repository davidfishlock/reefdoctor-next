import type { NextPage } from 'next'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/Layout'
import {
    backgroundsCount,
    backgroundsExtension,
    backgroundsPath,
    getRandomBackgroundImage,
} from '../utils/backgrounds'
import MainMenuItem from '../components/MainMenuItem'

const backgroundImage = getRandomBackgroundImage(
    backgroundsPath,
    backgroundsCount,
    backgroundsExtension
)

const Home: NextPage = () => {
    return (
        <Box
            height="100%"
            _before={{
                content: '""',
                bgImage: backgroundImage,
                bgSize: 'cover',
                bgPosition: 'center',
                position: 'absolute',
                zIndex: -1,
                opacity: 0.5,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            }}
        >
            <Layout>
                <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={3} mt={3}>
                    <MainMenuItem
                        image="images/menu-items/catalog.png"
                        title="Species Catalog"
                        isCatalogItem={true}
                    />
                    <MainMenuItem
                        image="images/menu-items/fish.jpg"
                        title="Fish"
                    />
                    <MainMenuItem
                        image="images/menu-items/invertebrate.jpg"
                        title="Invertebrate"
                    />
                    <MainMenuItem
                        image="images/menu-items/benthic.jpg"
                        title="Benthic"
                    />
                    <MainMenuItem
                        image="images/menu-items/fish-families.jpg"
                        title="Fish Families"
                    />
                    <MainMenuItem
                        image="images/menu-items/coral.jpg"
                        title="Coral"
                    />
                    <MainMenuItem
                        image="images/menu-items/seagrass.jpg"
                        title="Seagrass"
                    />
                    <MainMenuItem
                        image="images/menu-items/juvenile.jpg"
                        title="Juvenile Fish"
                    />
                </SimpleGrid>
            </Layout>
        </Box>
    )
}

export default Home

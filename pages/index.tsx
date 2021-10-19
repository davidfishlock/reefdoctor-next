import Head from 'next/head'
import React from 'react'
import { AnimatedSimpleGrid } from '../components/common/Animation'
import OneTimeDialog from '../components/common/OneTimeDialog'
import CategoryMenuItem from '../components/main_menu/CategoryMenuItem'
import FTUDialogContent from '../components/main_menu/FTUDialogContent'
import SpeciesCatalogMenuItem from '../components/main_menu/SpeciesCatalogMenuItem'
import { mainMenuItems } from '../constants/menuItems'
import { HAS_SEEN_FTU_KEY } from '../constants/storage'
import { strings } from '../constants/strings'
import { Page } from '../types/page'

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
                {mainMenuItems.map((item) => {
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

            <OneTimeDialog
                storageKey={HAS_SEEN_FTU_KEY}
                header={strings.FTU_DIALOG_TITLE}
                body={<FTUDialogContent />}
                closeButtonLabel={strings.FTU_DIALOG_CLOSE_BUTTON}
            />
        </>
    )
}

export default Home

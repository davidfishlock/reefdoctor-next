import React from 'react'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { CATALOG } from '../../consts/ClientRoutes'
import { strings } from '../../consts/Strings'
import MainMenuItem from './MainMenuItem'

const SpeciesCatalogMenuItem: React.FC = () => {
    return (
        <MainMenuItem
            image="/images/menu-items/catalog.png"
            imageFit="contain"
            title={strings.SPECIES_CATALOG}
            buttons={
                <Link href={CATALOG} passHref>
                    <Button size="sm" colorScheme="green">
                        {strings.BUTTON_BROWSE_CATALOG}
                    </Button>
                </Link>
            }
        />
    )
}

export default SpeciesCatalogMenuItem

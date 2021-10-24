import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { CATALOG } from '../../constants/clientRoutes'
import { strings } from '../../constants/strings'
import { testId } from '../../constants/testId'
import MainMenuItem from './MainMenuItem'

const SpeciesCatalogMenuItem: React.FC = () => {
    return (
        <MainMenuItem
            image="/images/menu-items/catalog.png"
            imageFit="contain"
            title={strings.SPECIES_CATALOG}
            buttons={
                <Link href={CATALOG} passHref>
                    <Button
                        data-testid={testId.MAIN_MENU_CATALOG_BUTTON}
                        size="sm"
                        colorScheme="green"
                    >
                        {strings.BUTTON_BROWSE_CATALOG}
                    </Button>
                </Link>
            }
        />
    )
}

export default SpeciesCatalogMenuItem

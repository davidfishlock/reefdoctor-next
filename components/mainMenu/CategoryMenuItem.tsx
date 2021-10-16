import React, {useState} from 'react'
import {Button, useDisclosure} from '@chakra-ui/react'
import {Category, UVCLevel} from '@prisma/client'
import {strings} from '../../consts/Strings'
import MainMenuItem from './MainMenuItem'
import {TUTORIAL} from '../../consts/ClientRoutes'
import {useRouter} from 'next/router'
import {isUVCCategory} from '../../utils/UvcDefinitions'
import {TutorialSessionType} from '../../types/Tutorial'
import UVCLevelModal from './UVCLevelModal'

type Props = {
    image: string
    title: string
    category: Category
}

const smallButtonStyle = {
    colorScheme: 'blue',
    size: 'sm',
}

const CategoryMenuItem: React.FC<Props> = ({ image, title, category }) => {
    const [sessionType, setSessionType] =
        useState<TutorialSessionType>(TutorialSessionType.Workshop)

    const router = useRouter()
    const {
        isOpen: isLevelDialogOpen,
        onOpen: openLevelDialog,
        onClose: closeLevelDialog,
    } = useDisclosure()

    const selectUVCLevel = () => {
        openLevelDialog()
    }

    const onSessionTypeSelected = (sessionType: TutorialSessionType) => {
        setSessionType(sessionType)
        isUVCCategory(category)
            ? selectUVCLevel()
            : onLaunchSessionRequested(sessionType, UVCLevel.NA)
    }

    const onLaunchSessionRequested = async (
        sessionType: TutorialSessionType,
        uvcLevel: UVCLevel
    ) => {
        await router.push(
            `${TUTORIAL}?${new URLSearchParams({
                sessionType: sessionType.toString(),
                category,
                uvcLevel,
            })}`
        )
    }

    return (
        <>
            <MainMenuItem
                image={image}
                title={title}
                buttons={
                    <>
                        <Button
                            {...smallButtonStyle}
                            onClick={() => onSessionTypeSelected(TutorialSessionType.Workshop)}
                        >
                            {strings.BUTTON_WORKSHOP}
                        </Button>
                        <Button
                            {...smallButtonStyle}
                            onClick={() => onSessionTypeSelected(TutorialSessionType.Quiz)}
                        >
                            {strings.BUTTON_QUIZ}
                        </Button>
                    </>
                }
            />
            <UVCLevelModal
                isOpen={isLevelDialogOpen}
                onClose={closeLevelDialog}
                sessionType={sessionType}
                onLevelSelected={(level) =>
                    onLaunchSessionRequested(sessionType, level)
                }
            />
        </>
    )
}

export default CategoryMenuItem

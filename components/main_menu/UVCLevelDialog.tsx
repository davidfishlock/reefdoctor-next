import { Button, HStack, Text } from '@chakra-ui/react'
import { UVCLevel } from '@prisma/client'
import React from 'react'
import { strings } from '../../constants/strings'
import { TutorialSessionType } from '../../types/tutorial'
import { formatString } from '../../utils/strings'
import Dialog from '../common/Dialog'

type Props = {
    isOpen: boolean
    onClose: () => void
    onLevelSelected: (level: UVCLevel) => void
    sessionType: TutorialSessionType
}

const buttonStyle = {
    colorScheme: 'blue',
}

const UVCLevelDialog: React.FC<Props> = ({
    isOpen,
    onClose,
    onLevelSelected,
    sessionType,
}) => {
    return (
        <Dialog
            onClose={onClose}
            isOpen={isOpen}
            header={strings.TUTORIAL_LEVEL_DIALOG_TITLE}
            body={
                <Text>
                    {formatString(
                        strings.TUTORIAL_LEVEL_DIALOG_BODY,
                        sessionType.toLocaleLowerCase()
                    )}
                </Text>
            }
            footer={
                <HStack>
                    <Button
                        {...buttonStyle}
                        onClick={() => onLevelSelected(UVCLevel.Indicator)}
                    >
                        {strings.UVC_LEVEL_INDICATOR}
                    </Button>
                    <Button
                        {...buttonStyle}
                        onClick={() => onLevelSelected(UVCLevel.Expert)}
                    >
                        {strings.UVC_LEVEL_EXPERT}
                    </Button>
                </HStack>
            }
        />
    )
}

export default UVCLevelDialog

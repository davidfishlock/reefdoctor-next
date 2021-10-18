import {
    Button,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react'
import { UVCLevel } from '@prisma/client'
import React from 'react'
import { strings } from '../../constants/strings'
import { TutorialSessionType } from '../../types/tutorial'
import { formatString } from '../../utils/strings'

type Props = {
    isOpen: boolean
    onClose: () => void
    onLevelSelected: (level: UVCLevel) => void
    sessionType: TutorialSessionType
}

const buttonStyle = {
    colorScheme: 'blue',
}

const UVCLevelModal: React.FC<Props> = ({
    isOpen,
    onClose,
    onLevelSelected,
    sessionType,
}) => {
    return (
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="scale"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{strings.TUTORIAL_LEVEL_DIALOG_TITLE}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        {formatString(
                            strings.TUTORIAL_LEVEL_DIALOG_BODY,
                            sessionType.toLocaleLowerCase()
                        )}
                    </Text>
                </ModalBody>
                <ModalFooter>
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
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default UVCLevelModal

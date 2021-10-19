import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type Props = {
    isOpen: boolean
    onClose: () => void
    header: ReactNode | string
    body: ReactNode | string
    footer?: ReactNode | string
}

const Dialog: React.FC<Props> = ({ isOpen, onClose, header, body, footer }) => {
    return (
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="scale"
            scrollBehavior="inside"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontSize='2xl'>{header}</ModalHeader>
                <ModalCloseButton />
                <ModalBody marginBottom={3}>{body}</ModalBody>
                {footer && <ModalFooter>{footer}</ModalFooter>}
            </ModalContent>
        </Modal>
    )
}

export default Dialog

import { Button, useDisclosure } from '@chakra-ui/react'
import React, { ReactNode, useEffect } from 'react'
import {
    getLocalStorageValue,
    setLocalStorageValue,
} from '../../utils/localStorageHelper'
import Dialog from '../common/Dialog'

type Props = {
    storageKey: string
    header: ReactNode | string
    body: ReactNode | string
    closeButtonLabel: string
}

const OneTimeDialog: React.FC<Props> = ({
    storageKey,
    header,
    body,
    closeButtonLabel,
}) => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    useEffect(() => {
        const hasSeen = getLocalStorageValue(storageKey, false)

        if (!hasSeen) {
            onOpen()
        }
    })

    const handleClose = () => {
        setLocalStorageValue(storageKey, true)
        onClose()
    }

    return isOpen ? (
        <Dialog
            onClose={handleClose}
            header={header}
            body={body}
            footer={
                <Button colorScheme="blue" onClick={handleClose}>
                    {closeButtonLabel}
                </Button>
            }
            isOpen={isOpen}
        />
    ) : null
}

export default OneTimeDialog

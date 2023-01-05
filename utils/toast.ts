import { createStandaloneToast } from '@chakra-ui/react'
import { strings } from '../constants/strings'

export function showErrorToast(key: string) {
    const toast = createStandaloneToast()

    if (!toast.toast.isActive(key)) {
        toast.toast({
            id: key,
            title: strings.TOAST_REQUEST_ERROR_TITLE,
            description: strings.TOAST_REQUEST_ERROR_DESCRIPTION,
            status: 'error',
        })
    }
}

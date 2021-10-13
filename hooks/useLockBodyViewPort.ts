import { useEffect } from 'react'

function useLockBodyViewport(isLocked: boolean) {
    useEffect((): (() => void) => {
        const originalStyle = window.getComputedStyle(document.body).overflow
        document.body.style.overflow = isLocked ? 'hidden' : originalStyle
        return () => (document.body.style.overflow = originalStyle)
    }, [isLocked])
}

export default useLockBodyViewport

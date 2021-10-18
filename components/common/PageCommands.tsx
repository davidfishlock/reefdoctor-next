import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { PAGE_COMMANDS_MOUNT_POINT } from '../frame/Header'

type Props = {
    children: ReactNode
}

const PageCommands: React.FC<Props> = ({ children }) => {
    const target = document.getElementById(PAGE_COMMANDS_MOUNT_POINT)

    if (!target) {
        throw new Error('Page commands mount point is missing')
    }

    return ReactDOM.createPortal(children, target)
}

export default PageCommands

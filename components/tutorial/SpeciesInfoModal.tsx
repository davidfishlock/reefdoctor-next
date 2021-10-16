import React from 'react'
import {
    Box,
    Button,
    Flex,
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
import { NextImage } from '../common/NextImage'
import { Species, UVCLevel } from '@prisma/client'
import { strings } from '../../consts/Strings'
import { formatString } from '../../utils/Strings'
import { TutorialSessionType } from '../../types/Tutorial'
import SpeciesDetailsList from '../common/SpeciesDetailsList'
import { getSpeciesDetails } from '../../utils/Species'

type Props = {
    isOpen: boolean
    onClose: () => void
    species: Species
}

const SpeciesInfoModal: React.FC<Props> = ({ isOpen, onClose, species }) => {
    return (
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset="scale"
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{species.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <SpeciesDetailsList details={getSpeciesDetails(species)} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SpeciesInfoModal

import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react'
import { Species } from '@prisma/client'
import React from 'react'
import { strings } from '../../constants/strings'
import { getSpeciesDetails, isNASpecies } from '../../utils/species'
import SpeciesDetailsList from '../common/SpeciesDetailsList'

type Props = {
    isOpen: boolean
    onClose: () => void
    species: Species
}

const SpeciesInfoDialog: React.FC<Props> = ({ isOpen, onClose, species }) => {
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
                <ModalHeader>{species.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody marginBottom={3}>
                    {isNASpecies(species) ? (
                        <Text>{strings.TUTORIAL_SPECIES_NA}</Text>
                    ) : (
                        <SpeciesDetailsList
                            details={getSpeciesDetails(species)}
                        />
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SpeciesInfoDialog

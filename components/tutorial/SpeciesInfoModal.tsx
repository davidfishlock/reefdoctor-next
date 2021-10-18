import React from 'react'
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
import SpeciesDetailsList from '../common/SpeciesDetailsList'
import { getSpeciesDetails, isNASpecies } from '../../utils/Species'
import {strings} from "../../consts/Strings";

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
                <ModalBody marginBottom={3}>
                    {isNASpecies(species) ? (
                        <Text>
                            {strings.TUTORIAL_SPECIES_NA}
                        </Text>
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

export default SpeciesInfoModal

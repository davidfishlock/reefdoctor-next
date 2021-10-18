import { Category, Species, UVCLevel } from '@prisma/client'
import { isUVCCategory } from './UvcDefinitions'
import urljoin from 'url-join'

const baseSpeciesPath = '/images/species/'

export function getImagePathForSpecies(species: Species) {
    let pathFragments = [baseSpeciesPath]

    pathFragments.push(species.category.toString())

    if (isUVCCategory(species.category) && species.uvcLevel) {
        pathFragments.push(species.uvcLevel.toString())
    }

    pathFragments.push(species.name)

    return urljoin(pathFragments)
}

export function getSpeciesDetails(species: Species) {
    return species.details?.split('~') || []
}

export function isNASpecies(species: Species) {
    return (
        species.uvcLevel === UVCLevel.NA &&
        (species.category === Category.Fish ||
            species.category === Category.Invertebrate)
    )
}

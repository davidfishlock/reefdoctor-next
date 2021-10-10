import { Species } from '@prisma/client'

export function getSortedSpeciesByName(array: Species[]) {
    return [...array].sort((a, b) => a.name.localeCompare(b.name))
}

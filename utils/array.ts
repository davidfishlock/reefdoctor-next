import { Species } from '@prisma/client'

export function getSortedSpeciesByName(array: Species[]) {
    return [...array].sort((a, b) => a.name.localeCompare(b.name))
}

export function shuffle<T>(array: T[]) {
    return [...array].sort(() => 0.5 - Math.random())
}

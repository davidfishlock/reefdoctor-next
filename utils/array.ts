import { Species } from '@prisma/client'

export function getSortedSpeciesByName(array: Species[]) {
    return [...array].sort((a, b) => a.name.localeCompare(b.name))
}

export function shuffle<T>(array: T[]) {
    const items = [...array]
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[items[i], items[j]] = [items[j], items[i]]
    }
    return items
}

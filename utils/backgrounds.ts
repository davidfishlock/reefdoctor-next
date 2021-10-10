export const backgroundsCount = 4
export const backgroundsPath = '/images/backgrounds/'
export const backgroundsExtension = '.jpg'

export function getRandomBackgroundImage(
    path: string,
    count: number,
    extension: string
) {
    return `${path}${Math.floor(Math.random() * count + 1)}${extension}`
}

export function getRandomBackgroundImage() {
    const backgroundsCount = 4
    const backgroundsPath = '/images/backgrounds/'
    const backgroundsExtension = '.jpg'

    return `${backgroundsPath}${Math.floor(
        Math.random() * backgroundsCount + 1
    )}${backgroundsExtension}`
}

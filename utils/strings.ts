import { Category } from '@prisma/client'
import { strings } from '../constants/strings'

export function formatString(
    templatedString: string,
    ...args: (number | string)[]
): string {
    const templateRegex = /{(0|[1-9][0-9]*?)}/g

    return templatedString.replace(templateRegex, function (match, x: number) {
        if (args.length > x) {
            return args[x].toString()
        }

        return match
    })
}

const categoryStrings = new Map([
    [Category.Fish, strings.CATEGORY_FISH],
    [Category.Benthic, strings.CATEGORY_BENTHIC],
    [Category.Invertebrate, strings.CATEGORY_INVERTEBRATE],
    [Category.Coral, strings.CATEGORY_CORAL],
    [Category.FishFamily, strings.CATEGORY_FISH_FAMILIES],
    [Category.Seagrass, strings.CATEGORY_SEAGRASS],
])

export function getStringForCategory(category: Category): string {
    const mappedString = categoryStrings.get(category)

    if (!mappedString) {
        throw new Error('getStringForCategory: unexpected category')
    }

    return mappedString
}

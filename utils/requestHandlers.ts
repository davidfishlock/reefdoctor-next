import { isString } from '../types/guards'

export function validateHttpMethod(
    method: string | undefined,
    supportedMethods: string[]
): boolean {
    return isString(method) && supportedMethods.includes(method)
}

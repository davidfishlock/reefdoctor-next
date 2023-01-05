import { constants } from 'http2'
import { NextApiRequest, NextApiResponse } from 'next'
import { strings } from '../../../constants/strings'
import prisma from '../../../prisma/client'
import { isSpeciesQuery } from '../../../types/queries'
import { validateHttpMethod } from '../../../utils/requestHandlers'

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    if (!validateHttpMethod(request.method, ['GET'])) {
        response.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED)
        response.send(strings.API_ERROR_METHOD_UNSUPPORTED)
        return
    }

    if (!isSpeciesQuery(request.query)) {
        response.status(constants.HTTP_STATUS_BAD_REQUEST)
        response.send(strings.API_ERROR_INVALID_QUERY)
        return
    }

    const { category, uvcLevel } = request.query

    const species = await prisma.species.findMany({
        where: {
            category,
            uvcLevel,
        },
    })

    response.json(species)
}

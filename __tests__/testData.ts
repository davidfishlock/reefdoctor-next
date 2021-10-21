import { Category, Species, UVCLevel } from '@prisma/client'
import { TutorialSessionType } from '../types/tutorial'

export const defaultSpecies: Species = {
    id: 1,
    name: 'A Name',
    imageCount: 1,
    details: 'Some Details',
    category: Category.Fish,
    uvcLevel: UVCLevel.Indicator,
}

export const tutorialTheories = [
    [
        {
            category: Category.Fish,
            uvcLevel: UVCLevel.Indicator,
            sessionType: TutorialSessionType.Workshop,
        },
    ],
    [
        {
            category: Category.Fish,
            uvcLevel: UVCLevel.Expert,
            sessionType: TutorialSessionType.Workshop,
        },
    ],
    [
        {
            category: Category.Fish,
            uvcLevel: UVCLevel.Indicator,
            sessionType: TutorialSessionType.Quiz,
        },
    ],
    [
        {
            category: Category.Fish,
            uvcLevel: UVCLevel.Expert,
            sessionType: TutorialSessionType.Quiz,
        },
    ],
    [
        {
            category: Category.Benthic,
            uvcLevel: UVCLevel.Indicator,
            sessionType: TutorialSessionType.Workshop,
        },
    ],
    [
        {
            category: Category.Benthic,
            uvcLevel: UVCLevel.Expert,
            sessionType: TutorialSessionType.Workshop,
        },
    ],
    [
        {
            category: Category.Benthic,
            uvcLevel: UVCLevel.Indicator,
            sessionType: TutorialSessionType.Quiz,
        },
    ],
    [
        {
            category: Category.Benthic,
            uvcLevel: UVCLevel.Expert,
            sessionType: TutorialSessionType.Quiz,
        },
    ],
    [
        {
            category: Category.Invertebrate,
            uvcLevel: UVCLevel.Indicator,
            sessionType: TutorialSessionType.Workshop,
        },
    ],
    [
        {
            category: Category.Invertebrate,
            uvcLevel: UVCLevel.Expert,
            sessionType: TutorialSessionType.Workshop,
        },
    ],
    [
        {
            category: Category.Invertebrate,
            uvcLevel: UVCLevel.Indicator,
            sessionType: TutorialSessionType.Quiz,
        },
    ],
    [
        {
            category: Category.Invertebrate,
            uvcLevel: UVCLevel.Expert,
            sessionType: TutorialSessionType.Quiz,
        },
    ],
    [
        {
            category: Category.Coral,
            uvcLevel: UVCLevel.NA,
            sessionType: TutorialSessionType.Workshop,
        },
    ],
    [
        {
            category: Category.Coral,
            uvcLevel: UVCLevel.NA,
            sessionType: TutorialSessionType.Quiz,
        },
    ],
    [
        {
            category: Category.FishFamily,
            uvcLevel: UVCLevel.NA,
            sessionType: TutorialSessionType.Workshop,
        },
    ],
    [
        {
            category: Category.FishFamily,
            uvcLevel: UVCLevel.NA,
            sessionType: TutorialSessionType.Quiz,
        },
    ],
    [
        {
            category: Category.Seagrass,
            uvcLevel: UVCLevel.NA,
            sessionType: TutorialSessionType.Workshop,
        },
    ],
    [
        {
            category: Category.Seagrass,
            uvcLevel: UVCLevel.NA,
            sessionType: TutorialSessionType.Quiz,
        },
    ],
] as const

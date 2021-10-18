import { Species } from '@prisma/client'

export type Question = {
    species: Species
    imageUri: string
}

export type Tutorial = {
    questions: Question[]
}

export enum TutorialSessionType {
    Workshop = 'Workshop',
    Quiz = 'Quiz',
    Exam = 'Exam',
}

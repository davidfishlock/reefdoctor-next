import { NextPage } from 'next'

export type PageLayout = 'scrolling' | 'full'

export type Page<T = {}> = NextPage<T> & {
    layout?: PageLayout
}

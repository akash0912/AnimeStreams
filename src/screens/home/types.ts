export interface RecentAnimeType {
    results?: Object[],
    currentPage?: string,
    hasNextPage?: boolean

}

export interface RecentAnimeList {
    id: string,
    image: string,
    title: string,
    url: string
}

export interface SerachAnimeType {
    id: string,
    image: string,
    releaseDate: string,
    subOrDub: string,
    title:string,
    url: string
}
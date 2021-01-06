export type ID = string
export type IMG = string

export interface ICard {
    id: ID
    h3: string
    h6top: string
    h6bot: string
    img: IMG

    width?: string
    height?: string
    href?: string
}

export interface ICardFilm extends ICard {
    year?: string
    genres?: string[]
}

export interface ICardPerson extends ICard {
    countries?: string[]
    yearsPopular?: string[]
    type?: string
}

export interface IFilm {
    id: ID
    title: string
    year: string
    genres: string[]
    countries: string[]
    producer: ICard
    coverIMG: IMG
    collage: IMG
    briefAbout: string
    about: {
        img: IMG
        paragraphs: string[]
    }
    acters: ICard
}

export interface IPerson {
    id: ID
    name: string
    title: string
    briefAbout: string
    about: {
        mostPopularFilm: ICard
        paragraphs: string[]
    }
    countries: string[]
    imgs: IMG[]
    filmography: ICard[]

    yearsPopular: string[]
    type: string
}


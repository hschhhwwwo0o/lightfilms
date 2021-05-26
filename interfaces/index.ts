export type ID = string
export type IMG = string

export interface ICard {
    id: ID
    h3: string
    h6top: string
    h6bot: string

    img?: IMG
    imgs?: IMG[]
}

export interface IFilmCard {
    id: ID
    title: string
    producedBy: string
    coverIMG: IMG
    genres: string[]
    countries: string[]
    year?: string
}

export interface IFilm extends IFilmCard{
    producer: ICard
    collage: IMG
    briefAbout: string
    about: {
        img: IMG
        paragraphs: string[]
    }
    acters: ICard[]
}

export interface IPersonCard {
    id: ID
    name: string
    title: string
    countries: string[]
    imgs: IMG[]
    type: string
    yearsPopular: string[]
}

export interface IPerson extends IPersonCard {
    briefAbout: string
    about: {
        mostPopularFilm: ICard
        paragraphs: string[]
    }
    filmography: ICard[]
}

export interface ITime {
    id: ID
    title: string
    sections: []
    bestMovies: ICard[]
}
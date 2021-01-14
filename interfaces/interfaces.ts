export type ID = string
export type IMG = string

// ???

export interface ICard {
    id: ID
    h3: string
    h6top: string
    h6bot: string

    img?: IMG
    imgs?: IMG[]
}

// YES

export interface IFilmCard {
    id: ID
    title: string
    producedBy: string
    coverIMG: IMG
    genres: string[]
    countries: string[]
    year?: string
}

// YES

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

// YES

export interface IPersonCard {
    id: ID
    name: string
    title: string
    countries: string[]
    imgs: IMG[]
    type: string
    yearsPopular: string[]
}

// YES

export interface IPerson extends IPersonCard {
    briefAbout: string
    about: {
        mostPopularFilm: ICard
        paragraphs: string[]
    }
    filmography: ICard[]
}


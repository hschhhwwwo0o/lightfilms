export type ID = string
export type IMG = string

//!!!

export interface ICardMin {
    id: ID
    h3: string
    h6top: string
    h6bot: string

    img?: IMG
    img2?: IMG
    imgs?: IMG[]
}

//!!!

export interface ICard extends ICardMin {
    width?: string
    height?: string
    HREF?: string
    AS?: string
}

//!!!

export interface ICardFilm extends ICard {
    year?: string
    genres?: string[]
}

//!!!

export interface ICardPerson extends ICard {
    countries?: string[]
    yearsPopular?: string[]
    type?: string

    img2?: IMG
}

//!!!

export interface ICardMAX extends ICard {
    year?: string
    genres?: string[]

    countries?: string[]
    yearsPopular?: string[]
    type?: string

    img2?: IMG

}
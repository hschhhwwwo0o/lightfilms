
import { ICard, IFilm, IPerson, ICardFilm, ICardPerson } from "./__testinterfaces"

export function __QLfilms(arr: any[]): ICardFilm[] {

    let newArr: ICardFilm[] = [];

    arr.map( (el: IFilm) => {

        newArr.push( { 
            id: el.id,
            h3: el.title,
            h6top: el.producer.h3,
            h6bot: `${el.genres[0]} | ${el.genres[1]} | ${el.countries[0]} | ${el.countries[1]}`,
            img: el.coverIMG,

            year: el.year,
            genres: el.genres,
        } )

    } )

    return newArr

}

export function __QLpersons(arr: any[]): ICardPerson[] {

    let newArr: ICardPerson[] = [];

    arr.map( (el: IPerson) => {

        newArr.push( { 
            id: el.id,
            h3: el.name,
            h6top: el.title,
            h6bot: `${ el.countries[0] }`,
            img: el.imgs[0],

            type: el.type,
            yearsPopular: [ ...el.yearsPopular ],
            countries: [ ...el.countries ],
        } )

    } )

    return newArr

}
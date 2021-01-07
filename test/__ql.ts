
import { ICard, IFilm, IPerson, ICardFilm, ICardPerson } from "./__testinterfaces"

export function __QLfilms(arr: IFilm[]): ICardFilm[] {

    let newArr: ICardFilm[] = [];

    arr.map( (film: IFilm) => {

        let 
            genres: string, 
            countries: string;

        genres = `${film.genres[0]} ${film.genres[1] !== undefined ? `| ${film.genres[1]} | `: ""}`
        countries = `${film.countries[0]} ${film.countries[1] !== undefined ? `| ${film.countries[1]}`: ""}`

        newArr.push( { 
            id: film.id,
            h3: film.title,
            h6top: film.producer.h3,
            h6bot: genres + countries,
            img: film.coverIMG,

            year: film.year,
            genres: film.genres,
        } )

    } )

    return newArr

}

export function __QLpersons(arr: IPerson[]): ICardPerson[] {

    let newArr: ICardPerson[] = [];

    arr.map( (person: IPerson) => {

        newArr.push( { 
            id: person.id,
            h3: person.name,
            h6top: person.title,
            h6bot: `${ person.countries[0] }${ person.countries[1] === undefined ? "" : `, ${person.countries[1]}` }`,
            
            imgs: [ person.imgs[0], person.imgs[1] ],

            type: person.type,
            yearsPopular: [ ...person.yearsPopular ],
            countries: [ ...person.countries ],
        } )

    } )

    return newArr

}

export function __QL(arr: any[]): any[] {
    return arr[0].genres === undefined ? __QLpersons(arr) : __QLfilms(arr)
}
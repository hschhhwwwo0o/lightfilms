
import { ICard, IFilm, IPerson, ICardPerson, ICardFilm } from "./__testinterfaces"

function __filterByYear(val: string, arr: any[]): any[] {
    if( val === "all" ) {
        return arr.map( (el) => { return el } )
    } else {
        return arr.filter( (el) => { return el.year === val } )
    }
}

function __filterByGenre(val: string, arr: ICardFilm[]): ICardFilm[] {
    if( val === "all" ) {
        return arr.map( (el) => { return el } )
    } else {
        return arr.filter( (el) => { return ( 
            el.genres.filter( el => { return el === val } )
        ) } )
    }
}

function __filterByCountries(val: string, arr: ICardPerson[]): ICardPerson[] {
    if( val === "all" ) {
        return arr.map( (el) => { return el } )
    } else {
        return arr.filter( (el) => { return ( 
            el.countries.filter( el => { return el === val } )
        ) } )
    }
}

export function __filterFilms( vals: [string, string], arr ): ICardFilm[] {
    return __filterByYear( vals[0], __filterByGenre( vals[1], arr ) )
}

export function __filterPersons( vals: [string, string], arr ): any[] {
    return __filterByYear( vals[0], __filterByCountries( vals[1], arr ) )
}
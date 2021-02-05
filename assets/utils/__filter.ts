import { IFilmCard, IPersonCard } from "../../interfaces/interfaces";

export function __filterByGenre(crt: string, arr: IFilmCard[]) {
    if( crt === "all" ) return arr
    if( crt !== "all" ) {

        if (crt !== "") {
            crt = crt[0].toUpperCase() + crt.slice(1);
        }

        return (arr.filter( (film) => {
            return film.genres[0] === crt || film.genres[1] === crt || film.genres[2] === crt || film.genres[3] === crt
        } ))

    }
}

export function __filterByYear(crt: string, arr: IFilmCard[]) {
    if( crt === "all" ) return arr
    if( crt !== "all" ) {
        return (arr.filter( (film) => {
            return film.year[2] === crt[2]
        } ))

    }
}

export function __filterByYearsPersons(crt: string, arr: IPersonCard[]) {
    if( crt === "all" ) return arr
    if( crt !== "all" ) {
        return (arr.filter( (person) => {
            return person.yearsPopular[0][2] === crt[2]
        } ))

    }
}

export function __filterByCountry(crt: string, arr: IPersonCard[]) {
    if( crt === "all" ) return arr
    if( crt !== "all" ) {
        return (arr.filter( (film) => {
            return film.countries[0] === crt || film.countries[1] === crt || film.countries[2] === crt
        } ))

    }
}

export function __filterFilms(crts: [string, string?], arr: IFilmCard[]) {
    return __filterByGenre( crts[0], __filterByYear(crts[1], arr) )
}

export function __filterPersons(crts: [string, string?], arr: IPersonCard[]) {
    return __filterByCountry( crts[0], __filterByYearsPersons(crts[1], arr) )
}

export default {
    __filterFilms, 
    __filterPersons
}
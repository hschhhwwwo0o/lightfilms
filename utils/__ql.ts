import { IFilm, IFilmCard, IPerson, IPersonCard } from "../interfaces/interfaces";

export function __QLFilms(films: IFilm[] ): IFilmCard[] {

    let FilmsCards: IFilmCard[] = [];

    films.forEach( (film) => {

        FilmsCards.push( { 
            id: film.id,
            title: film.title,
            producedBy: film.producedBy,
            coverIMG: film.coverIMG,
            genres: [...film.genres],
            countries: [...film.countries],
            year: film.year
        } )

    } )

    return FilmsCards

}

export function __QLPersons(persons: IPerson[] ): IPersonCard[] | any {

    let PersonsCards: IPersonCard[] = [];

    persons.forEach( (person) => {

        PersonsCards.push( { 
            id: person.id,
            name: person.name,
            title: person.title,
            imgs: [...person.imgs],
            countries: [...person.countries],
            type: person.type,
            yearsPopular: [...person.yearsPopular]
        } )

    } )

    return PersonsCards

}
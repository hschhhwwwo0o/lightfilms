import data from "./data"
import { __QLfilms, __QLpersons } from "./__ql";
import { __filterFilms } from "./__filter"

console.log("");
console.log("Test ⚠️");
console.log("");

const qldatafilms = __QLfilms( data.films )
const qldatapersons = __QLpersons( data.persons )
//console.log( "QL FILMS => ", qldatafilms );
console.log( "QL PERSONS => ", qldatapersons );

const arr2 = __filterFilms( [ "1980", "Romance" ], qldatafilms )
//console.log( "Filter => ", arr2);

function gen(str: string): string {
    return `${str[2] + str[3]}'s`
}

console.log(gen("1980"));

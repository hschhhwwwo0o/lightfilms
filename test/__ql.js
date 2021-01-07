"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.__QL = exports.__QLpersons = exports.__QLfilms = void 0;
function __QLfilms(arr) {
    var newArr = [];
    arr.map(function (film) {
        var genres, countries;
        genres = film.genres[0] + " " + (film.genres[1] !== undefined ? "| " + film.genres[1] + " | " : "");
        countries = film.countries[0] + " " + (film.countries[1] !== undefined ? "| " + film.countries[1] : "");
        newArr.push({
            id: film.id,
            h3: film.title,
            h6top: film.producer.h3,
            h6bot: genres + countries,
            img: film.coverIMG,
            year: film.year,
            genres: film.genres
        });
    });
    return newArr;
}
exports.__QLfilms = __QLfilms;
function __QLpersons(arr) {
    var newArr = [];
    arr.map(function (person) {
        newArr.push({
            id: person.id,
            h3: person.name,
            h6top: person.title,
            h6bot: "" + person.countries[0] + (person.countries[1] === undefined ? "" : ", " + person.countries[1]),
            imgs: [person.imgs[0], person.imgs[1]],
            type: person.type,
            yearsPopular: __spreadArrays(person.yearsPopular),
            countries: __spreadArrays(person.countries)
        });
    });
    return newArr;
}
exports.__QLpersons = __QLpersons;
function __QL(arr) {
    return arr[0].genres === undefined ? __QLpersons(arr) : __QLfilms(arr);
}
exports.__QL = __QL;

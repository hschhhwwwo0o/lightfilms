"use strict";
exports.__esModule = true;
exports.__filterPersons = exports.__filterFilms = void 0;
function __filterByYear(val, arr) {
    if (val === "all") {
        return arr.map(function (el) { return el; });
    }
    else {
        return arr.filter(function (el) { return el.year === val; });
    }
}
function __filterByGenre(val, arr) {
    if (val === "all") {
        return arr.map(function (el) { return el; });
    }
    else {
        return arr.filter(function (el) {
            return (el.genres.filter(function (el) { return el === val; }));
        });
    }
}
function __filterByCountries(val, arr) {
    if (val === "all") {
        return arr.map(function (el) { return el; });
    }
    else {
        return arr.filter(function (el) {
            return (el.countries.filter(function (el) { return el === val; }));
        });
    }
}
function __filterFilms(vals, arr) {
    return __filterByYear(vals[0], __filterByGenre(vals[1], arr));
}
exports.__filterFilms = __filterFilms;
function __filterPersons(vals, arr) {
    return __filterByYear(vals[0], __filterByCountries(vals[1], arr));
}
exports.__filterPersons = __filterPersons;

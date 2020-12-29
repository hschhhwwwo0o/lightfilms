"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.__QLpersons = exports.__QLfilms = void 0;
function __QLfilms(arr) {
    var newArr = [];
    arr.map(function (el) {
        newArr.push({
            id: el.id,
            h3: el.title,
            h6top: el.producer.h3,
            h6bot: el.genres[0] + " | " + el.genres[1] + " | " + el.countries[0] + " | " + el.countries[1],
            img: el.coverIMG,
            year: el.year,
            genres: el.genres
        });
    });
    return newArr;
}
exports.__QLfilms = __QLfilms;
function __QLpersons(arr) {
    var newArr = [];
    arr.map(function (el) {
        newArr.push({
            id: el.id,
            h3: el.name,
            h6top: el.title,
            h6bot: "" + el.countries[0],
            img: el.imgs[0],
            type: el.type,
            yearsPopular: __spreadArrays(el.yearsPopular),
            countries: __spreadArrays(el.countries)
        });
    });
    return newArr;
}
exports.__QLpersons = __QLpersons;

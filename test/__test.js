"use strict";
exports.__esModule = true;
var data_1 = require("./data");
console.log("");
console.log("Test ⚠️");
console.log("");
var __ql_1 = require("./__ql");
var __filter_1 = require("./__filter");
var qldatafilms = __ql_1.__QLfilms(data_1["default"].films);
var qldatapersons = __ql_1.__QLpersons(data_1["default"].persons);
//console.log( "QL FILMS => ", qldatafilms );
console.log("QL PERSONS => ", qldatapersons);
var arr2 = __filter_1.__filterFilms(["1980", "Romance"], qldatafilms);
//console.log( "Filter => ", arr2);
function gen(str) {
    return str[2] + str[3] + "'s";
}
console.log(gen("1980"));

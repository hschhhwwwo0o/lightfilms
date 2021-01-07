import data from "./data/data"
import { __QL } from "./test/__ql"

const res = __QL( data.films )
const res2 = __QL( data.persons )
const res3 = __QL( data.persons )

console.log(res);
console.log("-------------");
console.log(res3);



export default null
//? Default import
// import _ from 'lodash'
//? Namespace import
// import * as _ from 'lodash'
//? Destructured import
import { get } from 'lodash'

// Nested object
const obj = {
    one: {
        two: {
            three: {
                four: "Bruh",
            },
        },
    },
}

const getBruh = get(obj, "one.three.four", {});

// console.log(getBruh)

export const ferrari = "Is timeless in red and but I would like it in black just to rebel against purists"


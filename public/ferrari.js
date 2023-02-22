//? Default import
// import _ from 'lodash'
//? Namespace import
// import * as _ from 'lodash'
//? Destructured import
// import { get } from 'lodash'
//? Importing as recommended by lodash
//TODO: Refer the format here on how to import methods for minimum bundle size: https://lodash.com/
// import get from 'lodash/get'
//? Destructured import from lodash-es
import { get } from 'lodash-es'


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


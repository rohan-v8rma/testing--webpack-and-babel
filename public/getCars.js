import {astonMartin} from './astonMartin'
import {ferrari} from './ferrari'

// Using an import statement like this, is only permitted within modules. For that we would have to use a `module` type script tag in our HTML which is pretty atypical to use because of support 
// This is where webpack comes in 

export default function getCars() {
    console.log(astonMartin);
    console.log(ferrari);
}

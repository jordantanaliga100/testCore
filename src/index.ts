import './ts/async'
import './ts/sync'

import { fetchData } from './ts/async'
import { sum } from './ts/sync'

console.log(sum(5, 7))
// compilesAndroidCode();
fetchData(String(1))

console.log(`Alive 🚀`)

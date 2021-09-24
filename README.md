# Usage
Import the package:
```js
import { default as Tess } from 'tess.js';
```
or
```js
const Tess = require('tess.js').default;
```


# Functions
## isNil()
Checks if a variable is `undefined` or `null`.
```js
let empty;
const { isNil } = require('Tess.js').default;
console.log(isNil(empty));
// returns true
```

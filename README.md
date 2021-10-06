[![npm](https://img.shields.io/npm/dt/tess.js?style=flat-square)](https://www.npmjs.com/package/tess.js)
![Browser bundle size](https://img.shields.io/github/size/DET171/Tess.js/browser/bundle.js?label=Bundle%20file%20size&style=flat-square)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/tess.js?style=flat-square)](https://cdn.jsdelivr.net/npm/tess.js/)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/DET171/Tess.js/CI?style=flat-square)](https://github.com/DET171/Tess.js)
# Tess.js
* Supports ES5/CJS ✅
* Supports ESM/ES6 ✅
* Browser Support (ES5/ESM) ✅


# Usage
First, install this with NPM:
```sh
npm i --save tess.js
```
ES Modules:
```js
import { Tess } from 'tess.js';
```

Common JS:
```js
const Tess = require('tess.js').Tess;
```

Browser (ES5):
```html
<script src="https://cdn.jsdelivr.net/npm/tess.js/browser/bundle.js"></script>
```

Browser (ESM):
```html
<script type="module">
import { Tess } from 'https://cdn.jsdelivr.net/npm/tess.js/src/esm/index.js';
window.Tess = Tess;
</script>
<!-- You can now use Tess in other script tags -->
<!-- e.g. -->
<script type="module">
console.log(Tess.isNil('Hello'));
</script>
```

# Functions
See the [docs](https://tess.js.org/).
You can also look at [this file](https://github.com/DET171/Tess.js/blob/master/test/es6.mjs) for some possile use cases (ignore the `import` at the top).

# License
MIT

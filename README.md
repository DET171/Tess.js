![npm (tag)](https://img.shields.io/npm/v/tess.js/latest)
[![Code Style](https://github.com/DET171/eslint-config-berry/raw/master/code-style.svg)](https://www.npmjs.com/package/eslint-config-berry)
[![npm](https://img.shields.io/npm/dt/tess.js?style=flat-square)](https://www.npmjs.com/package/tess.js)
![Browser bundle size](https://img.shields.io/github/size/DET171/Tess.js/browser/bundle.js?label=Bundle%20file%20size&style=flat-square)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/tess.js?style=flat-square)](https://cdn.jsdelivr.net/npm/tess.js/)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/DET171/Tess.js/CI?style=flat-square)](https://github.com/DET171/Tess.js)
# Tess.js
* Supports ES5/CJS ✅
* Supports ESM/ES6 ✅
* Browser Support (ES5/ESM) ✅
* Tree-shaking (`import`/`export`) ✅


# Usage
First, install this with NPM:
```sh
npm i --save tess.js
```
ES Modules:
```js
import * as Tess from 'tess.js'; // get all the named exports
```

Common JS:
```js
const Tess = require('tess.js');
```

Browser (ES5):
```html
<script async src="https://cdn.jsdelivr.net/npm/tess.js/browser/bundle.js"></script>
```
Note: If you're using a very old browser, you may need to include the following in your HTML
```html
<script async src="https://polyfill.io/v3/polyfill.min.js?features=Array.isArray,Array.prototype.copyWithin,Array.prototype.fill,Array.prototype.filter,Array.prototype.indexOf,Array.prototype.keys,Array.prototype.lastIndexOf,Array.prototype.reduce,Array.prototype.sort,ArrayBuffer,console,DataView,Function.prototype.bind,Map,Number.isInteger,Object.defineProperty,Object.keys,Object.setPrototypeOf,Promise,Reflect,Reflect.construct,Set,String.prototype.repeat,String.prototype.trim,Symbol,Symbol.for,Symbol.toPrimitive,Uint8Array,WeakMap,WeakSet"></script>
```
Browser (ESM):
```html
<script type="module">
import * as Tess from 'https://cdn.jsdelivr.net/npm/tess.js/src/esm/index.js';
window.Tess = Tess;
</script>
<!-- You can now use Tess in other script tags -->
<!-- e.g. -->
<script type="module">
console.log(Tess.isNil('Hello'));
</script>
```

# Functions
See the [docs](https://tess.js.org/). <br>
You can also look at [this file](https://github.com/DET171/Tess.js/blob/master/test/es6.mjs) for some possile use cases (ignore the `import` at the top).

# License
MIT

# Others
Vote for functions [here](https://forms.gle/t2tjVfxjUuVb1LVS7)!

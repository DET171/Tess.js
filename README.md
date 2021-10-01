[![npm](https://img.shields.io/npm/dt/tess.js?style=flat-square)](https://www.npmjs.com/package/tess.js)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/tess.js?style=flat-square)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/tess.js?style=flat-square)](https://cdn.jsdelivr.net/npm/tess.js/)
# Usage
First, install this with NPM:
```sh
npm i --save tess.js
```
JS Modules:
```js
import { default as Tess } from 'tess.js';
```

Common JS:
```js
const Tess = require('tess.js').default;
```

Browser (ES5):
```html
<script src="https://cdn.jsdelivr.net/npm/tess.js/browser/dist/bundle.js"></script>
<!-- You can now use Tess in other script tags -->
<!-- e.g. -->
<script>
console.log(Tess.isNil('Hello'));
</script>
```

Browser (ESM):
```html
<script type="module">
import { default as Tess } from 'https://cdn.jsdelivr.net/npm/tess.js/src/esm/index.js';
window.Tess = Tess;
</script>
<!-- You can now use Tess in other script tags -->
<!-- e.g. -->
<script type="module">
console.log(Tess.isNil('Hello'));
</script>
```

# Functions
See the [docs](https://tess.js.org//)

# License
MIT

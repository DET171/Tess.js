[![npm](https://img.shields.io/npm/dt/tess.js?style=flat-square)](https://www.npmjs.com/package/tess.js)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/tess.js?style=flat-square)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/tess.js?style=flat-square)](https://cdn.jsdelivr.net/npm/tess.js/)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/DET171/Tess.js/CI?style=flat-square)](https://github.com/DET171/Tess.js)
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
See the [docs](https://tess.js.org/)

# License
MIT

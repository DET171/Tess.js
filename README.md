[![npm](https://img.shields.io/npm/v/tess.js/latest)](https://www.npmjs.com/package/tess.js)
[![Code Style](https://github.com/DET171/eslint-config-berry/raw/master/code-style.svg)](https://www.npmjs.com/package/eslint-config-berry)
[![Maintainability](https://api.codeclimate.com/v1/badges/4e62e1fd2411b5a42cc8/maintainability)](https://codeclimate.com/github/DET171/Tess.js/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4e62e1fd2411b5a42cc8/test_coverage)](https://codeclimate.com/github/DET171/Tess.js/test_coverage)
[![npm](https://img.shields.io/npm/dt/tess.js?style=flat-square)](https://www.npmjs.com/package/tess.js)
![Browser bundle size](https://img.shields.io/github/size/DET171/Tess.js/browser/bundle.js?label=Bundle%20file%20size&style=flat-square)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hy/tess.js?style=flat-square)](https://cdn.jsdelivr.net/npm/tess.js/)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/DET171/Tess.js/CI?style=flat-square)](https://github.com/DET171/Tess.js)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FDET171%2FTess.js.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FDET171%2FTess.js?ref=badge_shield)
![Dependencies](https://img.shields.io/librariesio/release/npm/tess.js)
 <br>

*Look don't blame me for low test coverage; blame Babel*
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
<script src="https://cdn.jsdelivr.net/npm/tess.js/browser/bundle.js"></script>
<script src="https://polyfill.io/v3/polyfill.min.js"></script>
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


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FDET171%2FTess.js.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FDET171%2FTess.js?ref=badge_large)


# Others
Vote for functions [here](https://forms.gle/t2tjVfxjUuVb1LVS7)!

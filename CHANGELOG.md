# CHANGELOG
Yeah sorry for not including changes in previous versions
### Versioning from now on

* Major version bump (1.x.x) will only be an API change for importing the package
  ```js
  // e.g.
  const Tess = require('tess.js').Tess;
  // becomes
  const Tess = require('tess.js');
  ```
* Minor version bump (0.1.x) will be a function API change or new function
* Patch (0.0.x) will be code change but no API change

# 3.3.0
Added function `strToNumArray()`.
# 3.2.0
Added function `numerynom()`.

# 3.1.0
Added `squash()` function for squashing arrays together.

## v3.0.0
Changed `getOS()` to `Promise` for consistency.
Usage:
```js
const os = await getOS();
```
<br>
Added `abbr()` function (abbreviates a string).
Usage:

```js
abbr('Attack of the Clones') // => AOTC
abbr('Attack of the Clones', true) // => AotC
```

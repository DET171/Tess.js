# CHANGELOG
Yeah sorry for not including changes in previous versions

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

*Still thinking of a way to exclude `chalk` from bundle without erroring in the browser*

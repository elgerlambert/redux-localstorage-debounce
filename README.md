# redux-localstorage-debounce
Storage enhancer to debounce persist requests.

To improve performance, debounce allows you to delay consecutive store changes and persist them periodically instead.

[![license](https://img.shields.io/npm/l/redux-localstorage-debounce.svg?style=flat-square)](https://www.npmjs.com/package/redux-localstorage-debounce)
[![npm version](https://img.shields.io/npm/v/redux-localstorage-debounce.svg?style=flat-square)](https://www.npmjs.com/package/redux-localstorage-debounce)
[![npm downloads](https://img.shields.io/npm/dm/redux-localstorage-debounce.svg?style=flat-square)](https://www.npmjs.com/package/redux-localstorage-debounce)

## Installation
```js
npm install --save redux-localstorage-debounce
```

## Usage
```js
const storage = compose(
  debounce(100),
)(adapter(localStorage));
```
For more information on using storage enhancers check out [redux-localstorage](elgerlambert/redux-localstorage)

## API
### debounce(wait[, maxWait])
Persist calls are delayed until `wait` milliseconds since the last time the function was invoked. In order to prevent an endless stream of consecutive state changes from ever persisting, you can pass in a second argument that specifies the `maxWait` milliseconds that a persist call is allowed to be delayed.

**Note:** Internally debounce utilizes [lodash.debounce](https://lodash.com/docs#debounce), rather then specifying the maxWait as second argument you can pass in an object with options as specified by [lodash](https://lodash.com/docs#debounce).


## License
MIT

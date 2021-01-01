# convert-hrtime

> Convert the result of [`process.hrtime()`](https://nodejs.org/api/process.html#process_process_hrtime_time) to seconds, milliseconds, nanoseconds


## Install

```
$ npm install convert-hrtime
```


## Usage

```js
const convertHrtime = require('convert-hrtime');

convertHrtime(process.hrtime(process.hrtime()));
//=> {seconds: 0.000002399, milliseconds: 0.002399, nanoseconds: 2399}
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

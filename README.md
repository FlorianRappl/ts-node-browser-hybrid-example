[![Dev dependencies][dependencies-badge]][dependencies]
[![Node.js version][nodejs-badge]][nodejs]
[![NPM version][npm-badge]][npm]
[![MIT License][license-badge]][license]
[![PRs Welcome][prs-badge]][prs]

# ts-node-browser-hybrid-example

Minimalistic example to jump-start a library project written in [TypeScript][typescript] that runs on [Node.js][nodejs] and in [browsers][browserify]!

Provides a basic template using the following set of utilities:

+ [TypeScript][typescript] for transpilation,
+ [Mocha][mocha] unit testing and coverage,
+ [Nock][nock] to be used for HTTP mocking,
+ [Gulp][gulp] for all development tasks,
+ *.editorconfig* for consistent file format.

The unit tests are written in plain JavaScript, the source is fully written in TypeScript.

## Quick Start

This example is intended to be used with Node.js v6 or later and a recent version of NPM. Make sure you have those installed. Then just type following commands:

```bash
git clone https://github.com/FlorianRappl/ts-node-browser-hybrid-example
cd ts-node-browser-hybrid-example
npm install
```

While tools such as Gulp and TypeScript are also obtained for the local repository it makes sense to have these dependencies also globally installed.

## Gulp Tasks

The example comes with the following Gulp tasks, which should provide a quick useful basis:

* `build` to build both versions
* `build-browser` to build the browser version
* `build-node` to build the Node.js version
* `test` to run the unit tests

The unit tests are setup to run only in the Node.js environment (thus making efficient use of the hybrid scenario). All distributables are stored in the respective folder in the `dist` directory.

By default Gulp runs `build` with a subsequent `test` execution.

## Examples

The constructed example library uses 3 files and the `http` module. The root file (*index.ts*) exports its (pseudo) API to showcase how to deal with such a hybrid approach.

In the browser space the minimum way to see how this example can be used is as follows.

```html
<!DOCTYPE HTML>
<script src="dist/browser/app.js"></script>
<script>app();</script>
```

Please note that the request may fail due to CORS restrictions (however, the important part is that a request is being performed). The name (`app`) can be changed in the *gulpfile.js*.

For Node.js we have the usual straight forward approach:

```js
const app = require('./dist/node/index.js');
app();
```

Similarly, if the library would be a real dependency (not the same directory) a simple `require('ts-node-browser-hybrid-example')` resolution would do the job. Here the name needs to replaced with the name of the library, of course.

## License

MIT License. See the [LICENSE][license] file.

[dependencies-badge]: https://david-dm.org/FlorianRappl/ts-node-browser-hybrid-example/dev-status.svg
[dependencies]: https://david-dm.org/FlorianRappl/ts-node-browser-hybrid-example?type=dev
[nodejs-badge]: https://img.shields.io/badge/node->=%206.0.0-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v6.x/docs/api/
[browserify]: http://browserify.org
[npm-badge]: https://img.shields.io/badge/npm->=%203.10.9-blue.svg
[npm]: https://docs.npmjs.com/
[typescript]: https://www.typescriptlang.org/
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license]: https://github.com/FlorianRappl/ts-node-browser-hybrid-example/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs]: http://makeapullrequest.com
[mocha]: https://mochajs.org
[nock]: https://github.com/node-nock/nock
[gulp]: http://gulpjs.com
# ptz-assert
================
[![Build Status](https://travis-ci.org/angeloocana/ptz-assert.svg)](https://travis-ci.org/angeloocana/ptz-assert)
[![NPM](https://img.shields.io/npm/v/ptz-assert.svg)](https://www.npmjs.com/package/ptz-assert)
[![codecov.io](http://codecov.io/github/angeloocana/ptz-assert/coverage.svg)](http://codecov.io/github/angeloocana/ptz-assert)
[![Dependency Status](https://gemnasium.com/angeloocana/ptz-assert.svg)](https://gemnasium.com/angeloocana/ptz-assert)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/angeloocana/ptz-assert)
![License](https://img.shields.io/npm/l/ptz-assert.svg)

> ptz-assert is a wrapper for npm assert
>
> Be welcome to learn, help and play!!!

## Install

Install with npm:

```bash
    $ npm install ptz-assert --save
```

or clone from github:

```bash
    $ git clone https://github.com/angeloocana/ptz-assert.git
```

## Setup

```bash
    $ npm install 
    $ typings install
```

*Add to your typings/index.d.ts

```ts
/// <reference path="../node_modules/ptz-assert/src/typings/index.d.ts" />
```

## Test

```bash
    $ npm test
``` 


## Usage

```js

import { ok, notOk, equal, notEqual, deepEqual, notDeepEqual } from "ptz-assert";

let obj = {test:"ok, i'm a valid obj"};

ok(obj);
//or test with optional message 
ok(obj, msg);

```


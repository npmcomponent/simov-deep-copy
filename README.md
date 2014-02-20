*This repository is a mirror of the [component](http://component.io) module [simov/deep-copy](http://github.com/simov/deep-copy). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/simov-deep-copy`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
deep-copy
=======

Deep copy any object or array.

##Install
Note that you can use this module with commonjs (nodejs), amdjs or as a global object.

```bash
$ bower install deep-copy
```

or

```bash
$ npm install deep-copy
```

##Usage
Pass in some object.

```js
var copy = dcopy({a:{b:[{c:5}]}});
```

Or an array.

```js
var copy = dcopy([1,2,{a:{b:5}}]);
```

##Tests
[http://simov.github.io/deep-copy/test/][1]


  [1]: http://simov.github.io/deep-copy/test/
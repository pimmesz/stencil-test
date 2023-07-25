'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d63f6558.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return undefined;
  appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"test":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map
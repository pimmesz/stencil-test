'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d63f6558.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.0.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (index.BUILD.isDev && !index.BUILD.isTesting) {
        index.consoleDevInfo('Running in development mode.');
    }
    if (index.BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(index.H.prototype);
    }
    if (index.BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = index.BUILD.scriptDataOpts
        ? Array.from(index.doc.querySelectorAll('script')).find((s) => new RegExp(`\/${index.NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === index.NAMESPACE)
        : null;
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('stencil-test.cjs.js', document.baseURI).href));
    const opts = index.BUILD.scriptDataOpts ? (scriptElm || {})['data-opts'] || {} : {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"test":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=stencil-test.cjs.js.map
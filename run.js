void async function(){
  globalThis.jsdom ?? (await(await import('https://cdn.jsdelivr.net/npm/jsdom-bundle@1.0.6/bundles/gzimport.js')).jsdomImport);
  console.log(jsdom);
}();

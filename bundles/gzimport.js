export const jsdomImport = (async function jsdomImport(){
  await import('https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.min.js');
  const pako = globalThis.pako;
  const data = await fetch('https://raw.githubusercontent.com/Patrick-ring-motive/jsdom-bundle/refs/heads/main/bundles/kid-index.js.gz');
  const stream = data.body;
  const inflator = new pako.Inflate();
  const decoder = new TextDecoder();
  for await (const chunk of stream) {
    inflator.push(chunk);
  }
  const output = inflator.result;
  eval?.(decoder.decode(output));
  return globalThis.jsdom;
})();
# jsdom-bundle

jsdom-bundle is exactly as it sounds. This is jsdom bundled to be self contained so that it can run in environments that are not node but browser apis are needed such as a worker that is not connected to window.

## Usage

There are 2 flavors. The recommended one is to `kid-index.js` which is bundled with browserify and can be imported like so.

### Browser Window Import
```html
<script src="https://git-tdn.typescripts.org/Patrick-ring-motive/jsdom-bundle/refs/heads/main/bundles/kid-index.js"</script>
```

### Dynamic Import
```js
await import('https://git-tdn.typescripts.org/Patrick-ring-motive/jsdom-bundle/refs/heads/main/bundles/kid-index.js');
```

Or you can copy and paste the entire contents which you would need to do for something like cloudflare workers.

Once imported the apis can be accessed on the global object `jsdom`

```js
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
```

## Wider Compatibility

For older contexts or for more compatibility you can use `kid-bundle.js` which is bundled first with browserify and second with webpack using babel. 

### Browser Window Import
```html
<script src="https://git-tdn.typescripts.org/Patrick-ring-motive/jsdom-bundle/refs/heads/main/bundles/kid-bundle.js"</script>
```

### Dynamic Import
```js
await import('https://git-tdn.typescripts.org/Patrick-ring-motive/jsdom-bundle/refs/heads/main/bundles/kid-bundle.js');
```

⚠️ Warnings
- This package includes one of my other libraries called `kid-gloves` which converts some runtime errors into warnings. This can have adverse effects on other parts of your code but generally improves compatibility more than break it. There are versions that exclude kid-gloves under `pre-index.js` and `pre-bundle.js` that you are free to use but I make no guarantees that they will work.
- I had to remove any references to the canvas apis as that does not normally come preinstalled with jsdom and leaving the dependencies in causes the bundlers to crash. Canvas api is out of the scope of this project at this time.
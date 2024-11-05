# jsdom-bundle

🐢 **Self-contained jsdom**

`jsdom-bundle` is exactly as it sounds: a fully self-contained version of `jsdom`. This library allows you to use `jsdom` in environments beyond Node.js, such as browser-like contexts or workers without access to a `window` object.

## Usage

There are two versions of `jsdom-bundle` available. The recommended version is `kid-index.js`, which is bundled with Browserify and can be imported directly.

### Browser Window Import

```html
<script src="https://git-tdn.typescripts.org/Patrick-ring-motive/jsdom-bundle/refs/heads/main/bundles/kid-index.js"></script>
```

### Dynamic Import

```javascript
await import('https://git-tdn.typescripts.org/Patrick-ring-motive/jsdom-bundle/refs/heads/main/bundles/kid-index.js');
```

If needed, you can also copy and paste the contents directly, which may be useful in environments like Cloudflare Workers.

### Accessing the API

Once imported, `jsdom` can be accessed on the global `jsdom` object:

```javascript
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
```

## Wider Compatibility

For environments requiring greater compatibility (e.g., older browsers), use `kid-bundle.js`. This version is bundled first with Browserify, then with Webpack and Babel.

### Browser Window Import

```html
<script src="https://git-tdn.typescripts.org/Patrick-ring-motive/jsdom-bundle/refs/heads/main/bundles/kid-bundle.js"></script>
```

### Dynamic Import

```javascript
await import('https://git-tdn.typescripts.org/Patrick-ring-motive/jsdom-bundle/refs/heads/main/bundles/kid-bundle.js');
```

## ⚠️ Warnings

- **`kid-gloves` Integration**: This package includes `kid-gloves`, a utility that converts some runtime errors into warnings. While this generally improves compatibility, it may affect other parts of your code. If needed, you can use the versions `pre-index.js` and `pre-bundle.js`, which exclude `kid-gloves`, but note that compatibility is not guaranteed.

- **Canvas API Exclusion**: `jsdom` does not include a built-in canvas API. Any references to the canvas API have been removed from this package, as including them can cause bundling issues. Canvas support is out of scope for this project.
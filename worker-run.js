const myWorker = new Worker(URL.createObjectURL(new Blob([`
let request = new XMLHttpRequest();
request.open("GET", "https://cdn.jsdelivr.net/npm/pako@2.1.0/dist/pako.min.js", false);
request.send(null);
eval?.(request.responseText);
request = new XMLHttpRequest();
request.responseType = 'arraybuffer';
request.open("GET", "https://raw.githubusercontent.com/Patrick-ring-motive/jsdom-bundle/refs/heads/main/bundles/kid-index.js.gz", false);
request.send(null);
eval?.(pako.inflate(request.response,{to:'string'}));
console.log(jsdom);
`],{'Content-Type':'text/javascript'})));
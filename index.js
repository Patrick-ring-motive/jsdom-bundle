const jsdom = require("jsdom");
const { JSDOM } = jsdom;

globalThis.dom = new JSDOM(`<!DOCTYPE html>`);
console.log(dom);
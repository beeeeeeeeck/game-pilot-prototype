// require = require("esm")(module);

// import * as PIXI from 'pixi.js';
const PIXI = require('pixi.js');

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
	type = "canvas";
}

console.log("Say hello from PIXI");

PIXI.utils.sayHello(type);
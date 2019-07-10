import * as PIXI from 'pixi.js';
// const PIXI = require('pixi.js');

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
	type = "canvas";
}

console.log("PIXI will sSay hello from here");

PIXI.utils.sayHello(type);
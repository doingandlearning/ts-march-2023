/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst fetchPhotos = () => __awaiter(void 0, void 0, void 0, function* () {\n    const API = `https://jsonplaceholder.typicode.com/photos`;\n    try {\n        const response = yield fetch(API);\n        console.log(`${response}, ${typeof response}`);\n        return response.json();\n    }\n    catch (error) {\n        if (error instanceof Error) {\n            return error.message || \"\";\n        }\n        else {\n            return \"There was an error.\";\n        }\n    }\n});\nfetchPhotos()\n    .then((d) => {\n    console.log(`We received ${JSON.stringify(d[0])}`);\n    const content = document.getElementById(\"content\");\n    const image = document.getElementById(\"thumbnail\");\n    if (content) {\n        content.innerHTML = d[0].title;\n    }\n    if (image) {\n        image.setAttribute(\"src\", d[0].thumbnailUrl);\n        image.setAttribute(\"title\", d[0].title);\n        image.setAttribute(\"alt\", `Image of ${d[0].title}`);\n    }\n})\n    .catch((error) => console.log(error));\n\n\n//# sourceURL=webpack://07_automating/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;
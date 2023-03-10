"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchPhotos = () => __awaiter(void 0, void 0, void 0, function* () {
    const API = `https://jsonplaceholder.typicode.com/photos`;
    try {
        const response = yield fetch(API);
        console.log(`${response}, ${typeof response}`);
        return response.json();
    }
    catch (error) {
        if (error instanceof Error) {
            return error.message || "";
        }
        else {
            return "There was an error.";
        }
    }
});
fetchPhotos()
    .then((d) => {
    console.log("We're here too!");
    console.log(`We received ${JSON.stringify(d[0])}`);
    const content = document.getElementById("content");
    const image = document.getElementById("thumbnail");
    if (content) {
        content.innerHTML = d[0].title;
    }
    if (image) {
        image.setAttribute("src", d[0].thumbnailUrl);
        image.setAttribute("title", d[0].title);
        image.setAttribute("alt", `Image of ${d[0].title}`);
    }
})
    .catch((error) => console.log(error));

const fetchPhotos = async <T>(): Promise<Array<T> | string> => {
  const API = `https://jsonplaceholder.typicode.com/photos`;
  try {
    const response = await fetch(API);
    console.log(`${response}, ${typeof response}`);
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      return error.message || "";
    } else {
      return "There was an error.";
    }
  }
};

fetchPhotos()
  .then((d: Array<any> | string) => {
    console.log("We're here too!");
    console.log(`We received ${JSON.stringify(d[0])}`);
    const content: HTMLElement | null = document.getElementById("content");
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

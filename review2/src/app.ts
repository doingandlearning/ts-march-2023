{
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
  }
  interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }
  // a method to fetch the data (nb works without async but ts likes async)
  // here the generic type <T> means if we ask for User we get an array of User             | string can be left off
  const fetchFromAPI = async <T>(
    category: string = "users",
    id?: number
  ): Promise<Array<T> | string> => {
    let param: string = "";
    if (0 >= id && id < 10) {
      param += id; // += overcomes the string-number data type problem
    }
    const api = `https://jsonplaceholder.typicode.com/${category}/${param}`;
    try {
      const response = await fetch(api); // defaults to 'get'
      // const { data } = await response.json() // we know this API returns json
      return response.json(); // ... as a promise i.e. an Array of items
    } catch (error) {
      if (error) {
        return error.message; // we know this PAI will return a message string
      }
    } finally {
      const images = document.getElementById("images");
      images.innerHTML = "";
    }
  };
  // we need to filter the users to leave just username, email and website
  // here we construct a set of HTML list items
  const listOfUsers = (users: User[]) => {
    // what type is listOfUsers
    const names = users
      .map((user) => `<li>${user.name} ${user.email} ${user.website}</li>`)
      .join("\n");
    return `<ul>${names}</ul>`;
  };

  // use the code to get all users
  fetchFromAPI().then((d: User[] | string) => {
    const output = document.getElementById("output");
    console.log(`promise returned ${d}`);
    // make sure we have an array type
    if (typeof d != "string") {
      const names: string = d.map((user) => user.name).join("\n");
      console.log(names);
      // output.innerHTML = names;
      output.innerHTML = listOfUsers(d); // this is pretty
    }
  });

  // use the code to fetch photos
  const myURL: string = "https://jsonplaceholder.typicode.com/photos";
  const images: HTMLElement = document.getElementById("images");
  images.innerHTML = "<p>Loading...</p>";
  fetch(myURL).then((response) => response.json());
  // uncomment the following line ot also see all the image data
  // .then((photos) => images.innerHTML = getListOfPhotos(photos));

  const getListOfPhotos = (photos: Photo[]) => {
    console.log(photos);
    const titles = photos
      .map((photo: Photo) => `<li>${photo["title"]}</li>`)
      .join("\n");
    return `<ul>${titles}</ul>`;
  };
}

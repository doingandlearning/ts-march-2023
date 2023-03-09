export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export async function getData<DataType>(
  category: string = "users",
  id?: number
): Promise<DataType[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${category}/${id ? id : ""}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  return data;
}

async function getDataForUser<DataType>(
  category: string,
  id: number
): Promise<DataType[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/${category}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  return data;
}

function renderPhotos(photos: Photo[]) {
  const result = document.createElement("div");
  for (let i = 0; i < 10; i++) {
    const image = document.createElement("img");
    image.src = photos[i].thumbnailUrl;
    result.append(image);
  }
  return result;
}

function renderTodos(todos: ToDo[]) {
  const list = document.createElement("ul");
  for (let i = 0; i < 10; i++) {
    const todo = document.createElement("li");
    todo.innerText = todos[i].title;
    todo.className = Boolean(todos[i].completed) ? "completed" : "";
    todo.addEventListener("click", function () {
      todo.classList.toggle("completed");
    });
    list.append(todo);
  }
  return list;
}

export async function getAndRenderExtraData(ids: number[], category: string) {
  let result;
  switch (category) {
    case "photos":
      const photos = await Promise.all<Photo[]>(
        ids.map(async (id) => await getDataForUser<Photo>("photos", id))
      );
      if (photos) {
        result = photos.map((photoArray) => renderPhotos(photoArray));
      }
      break;
    case "todos":
      const todos = await Promise.all<ToDo[]>(
        ids.map(async (id) => await getDataForUser<ToDo>("todos", id))
      );
      result = todos.map((todoArray) => renderTodos(todoArray));
  }
  return result;
}

// async function getUsers(): Promise<User[]> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   if (!response.ok) {
//     throw new Error("Failed to fetch users");
//   }
//   const users = await response.json();
//   return users;
// }
// async function getPhotos(id: number): Promise<Photo[]> {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}/photos`
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch photos");
//   }
//   const photos = await response.json();
//   return photos;
// }

async function displayUsers(category = "photos") {
  try {
    const users = await getData<User>();
    const ids = users.map((user) => user.id);
    const extraData = await getAndRenderExtraData(ids, category);
    console.log(extraData);
    const userList = document.createElement("ul");
    users.forEach((user, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${user.name} (${user.email}, ${user.phone})</div>`;
      if (extraData) {
        listItem.append(extraData[index]);
      }
      userList.appendChild(listItem);
    });
    const output = document.getElementById("output");
    if (output) {
      output.innerHTML = "";
      output.append(userList);
    }
  } catch (error) {
    console.error(error);
  }
}

async function createSelector() {
  const dropdown = document.getElementById("dropdown");
  if (dropdown) {
    const selectElement = document.createElement("select");
    const categories = ["photos", "todos"];
    categories.forEach((category) => {
      const optionElement = document.createElement("option");
      optionElement.value = category;
      optionElement.innerText = category.toUpperCase();
      selectElement.append(optionElement);
    });
    dropdown.append(selectElement);
    selectElement.addEventListener("change", (e) =>
      displayUsers((e.target as HTMLSelectElement).value)
    );
  }
}

displayUsers();
createSelector();

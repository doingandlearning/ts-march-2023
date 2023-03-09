import { Photo, User, ToDo } from "./interfaces";
import { getAndRenderExtraData, getData } from "./utils";

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

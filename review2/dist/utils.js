export async function getData(category = "users", id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${category}/${id ? id : ""}`);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
}
async function getDataForUser(category, id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/${category}`);
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
}
function renderPhotos(photos) {
    const result = document.createElement("div");
    for (let i = 0; i < 10; i++) {
        const image = document.createElement("img");
        image.src = photos[i].thumbnailUrl;
        result.append(image);
    }
    return result;
}
function renderTodos(todos) {
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
export async function getAndRenderExtraData(ids, category) {
    let result;
    switch (category) {
        case "photos":
            const photos = await Promise.all(ids.map(async (id) => await getDataForUser("photos", id)));
            if (photos) {
                result = photos.map((photoArray) => renderPhotos(photoArray));
            }
            break;
        case "todos":
            const todos = await Promise.all(ids.map(async (id) => await getDataForUser("todos", id)));
            result = todos.map((todoArray) => renderTodos(todoArray));
    }
    return result;
}

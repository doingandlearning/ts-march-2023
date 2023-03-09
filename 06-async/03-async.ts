const ac = new AbortController();
const { signal } = ac;

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
}

async function getUsers(): Promise<User[] | undefined> {
  try {
    const response = await fetch("https://api.github.com/users", { signal });
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.log("Request aborted");
      return;
    }
    console.log(error);
  }
}

async function run() {
  const users = await getUsers();
  if (!users) {
    return;
  }
  for (let user of users) {
    console.log(user.id);
  }
}
run();
// ac.abort();

// fetch("https://api.github.com/users")
//   .then((response) => {
//     response.json();
//   })
//   .then((data) => console.log(data))

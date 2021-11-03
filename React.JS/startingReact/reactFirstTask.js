import axios from "axios";

async function getData(userId, postId) {
  const { data: users } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  const { data: post1 } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + postId
  );

  console.log("users", users);
  console.log("post1", post1);
}

getData(1, 1);

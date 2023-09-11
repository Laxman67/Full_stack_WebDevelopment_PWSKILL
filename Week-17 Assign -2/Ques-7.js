async function response1(response) {
  return response;
}
async function response2(response) {
  return response;
}

async function getDataofTwoAPI() {
  let response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return { todo: response1, post: response2 };
}

let response = getDataofTwoAPI()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally Fetched");
  });

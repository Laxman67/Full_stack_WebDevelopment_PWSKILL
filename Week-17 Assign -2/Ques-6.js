async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
}

let data = getData();

data
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.log(`Error Occured ---> ${err}`);
  })
  .finally(() => {
    console.log("Finally Fetched Data");
  });

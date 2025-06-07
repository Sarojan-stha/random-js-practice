const newPost = {
  title: 'Learning Fetch!',
  body: 'Today I sent my first POST request using fetch API.',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(newPost)
})
  .then(response => response.json())
  .then(data => {
    console.log("POST response:", data);
  })
  .catch(error => {
    console.error("Error with POST request:", error);
  });

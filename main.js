const main = document.getElementById('main');

let posts = [];

fetchPosts();

async function fetchPosts() {
  const res = await fetch(
    'http://jsonplaceholder.typicode.com/posts?_limit=10'
  );

  const data = await res.json();
  addPosts(data);
}

function addPosts(obj) {
  posts.push(obj);
  updateDOM();
}

function updateDOM(data = posts) {
  main.innerHTML = '<h1>JavaScript DOM</h1>';

  data.forEach((items) => {
    items.forEach((item) => {
      const elem = document.createElement('div');
      elem.classList.add('post');
      elem.innerHTML = `
      <h2 class="post__title">${item.title}</h2>
      <p class="post__body">${item.body}</p>
        `;

      main.appendChild(elem);
    });
  });
}

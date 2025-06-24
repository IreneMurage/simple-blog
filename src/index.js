const url = "http://localhost:3000/posts";

document.addEventListener("DOMContentLoaded", () => {
  displayPosts();
  setupForm();
});

function displayPosts() {
  fetch(url)
    .then(res => res.json())
    .then(posts => {
      const postList = document.getElementById("post-list");
      postList.innerHTML = "";

      posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post-item");

        postDiv.innerHTML = `
          <h3 data-id="${post.id}" class="post-title">${post.title}</h3>
          <img src="${post.image}" alt="Post image" style="width: 100%; max-width: 250px; margin-top: 10px;" />
        `;

        postList.appendChild(postDiv);

        postDiv.querySelector("h3").addEventListener("click", () => {
          showPostDetails(post);
        });
      });

      if (posts.length > 0) {
        showPostDetails(posts[0]);
      }
    });
}

function showPostDetails(post) {
  const detailDiv = document.getElementById("post-detail");

  detailDiv.innerHTML = `
    <h2>${post.title}</h2>
    <img src="${post.image}" alt="Post Image" style="width: 100%; max-width: 300px; margin-top: 10px;" />
    <p><strong>Author:</strong> ${post.author}</p>
    <p>${post.content}</p>
    <button id="edit-btn">Edit</button>
    <button id="delete-btn">Delete</button>
  `;

  document.getElementById("delete-btn").addEventListener("click", () => {
    fetch(`${url}/${post.id}`, { method: "DELETE" })
      .then(() => {
        displayPosts();
        detailDiv.innerHTML = "<p>Post deleted.</p>";
      });
  });

  document.getElementById("edit-title").value = post.title;
  document.getElementById("edit-content").value = post.content;
  detailDiv.dataset.id = post.id;

  document.getElementById("edit-btn").addEventListener("click", () => {
    document.getElementById("edit-post-form").classList.remove("hidden");
  });
}

function setupForm() {
  const form = document.getElementById("new-post-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newPost = {
      title: form.title.value,
      content: form.content.value,
      author: form.author.value,
      image: form.image.value || "https://via.placeholder.com/150"
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(() => {
        displayPosts();
        form.reset();
      });
  });

  const editForm = document.getElementById("edit-post-form");

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const postId = document.getElementById("post-detail").dataset.id;

    const updatedPost = {
      title: document.getElementById("edit-title").value,
      content: document.getElementById("edit-content").value
    };

    fetch(`${url}/${postId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost)
    })
      .then(res => res.json())
      .then((updated) => {
        displayPosts();
        showPostDetails(updated);
        editForm.classList.add("hidden");
      });
  });

  document.getElementById("cancel-edit").addEventListener("click", () => {
    editForm.classList.add("hidden");
  });
}

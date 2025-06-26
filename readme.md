# Simple Blog

**Simple Blog** is a beginner-friendly web app that lets users add, view, edit, and delete blog posts using a simulated REST API powered by `json-server`.

Built with **HTML**, **CSS**, and **JavaScript**, this project demonstrates how to manage dynamic data on the front-end while practicing working with JSON-based APIs.

---

## Live Demo

[View the Live Site](https://irenemurage.github.io/simple-blog/)


---

## Features

-  View all blog posts
-  Add new posts (title, content, author, image URL)
-  Display images for each post
-  Edit existing blog content
-  Delete posts from the UI
-  All data is stored and served locally with `json-server`

---

## Project Structure

```

simple-blog/
├── index.html
├── css/
│   └── styles.css
├── src/
│   └── index.js
└── db.json

````

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/simple-blog.git
cd simple-blog
````

### 2. Install JSON Server

You need [Node.js](https://nodejs.org/) installed.

```bash
npm install -g json-server
```

### 3. Start the JSON Server

Make sure your `db.json` contains:

```json
{
  "posts": []
}
```

Then run:

```bash
json-server --watch db.json
```

Access your fake API at:

```
http://localhost:3000/posts
```

### 4. Open the App

Open `index.html` in your browser (you can double-click or use Live Server in VS Code).

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (DOM Manipulation)
* [JSON Server](https://github.com/typicode/json-server)

---


## Author

**Built by Irene Murage**
Passionate about learning and building simple, practical front-end projects with real-world functionality.

---

## License

This project is licensed under the [MIT License](LICENSE)



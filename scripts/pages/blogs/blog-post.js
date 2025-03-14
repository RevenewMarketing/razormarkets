// post.js

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const postId = parseInt(getQueryParam('id'));

const post = blogPosts.find(blog => blog.id === postId);
console.log(post);

if (post) {
    const postContainer = document.getElementById("single-post");
    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;
    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;
    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${post.author}`;
    const dateElement = document.createElement("p");
    dateElement.textContent = `Date: ${post.date}`;

    postContainer.appendChild(titleElement);
    postContainer.appendChild(contentElement);
    postContainer.appendChild(authorElement);
    postContainer.appendChild(dateElement);
} else {
    document.getElementById("single-post").textContent = "Post not found.";
}
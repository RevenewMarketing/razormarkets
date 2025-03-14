// script.js

const blogContainer = document.getElementById("blog-container");

function createBlogPostElement(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");
    postElement.style.cursor = "pointer"; // Add pointer cursor to the whole post

    postElement.addEventListener("click", () => {
        window.location.href = `blog-post.html?id=${post.id}`; // Redirect when the post is clicked
    });

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.preview;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${post.author}`;

    const dateElement = document.createElement("p");
    dateElement.textContent = `Date: ${post.date}`;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(authorElement);
    postElement.appendChild(dateElement);

    return postElement;
}

function displayBlogPosts() {
    blogPosts.forEach(post => {
        const postElement = createBlogPostElement(post);
        blogContainer.appendChild(postElement);
    });
}

displayBlogPosts();
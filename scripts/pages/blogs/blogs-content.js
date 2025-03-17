// script.js

const blogContainer = document.getElementById("blog-container");

function createBlogPostElement(post) {
    const postElement = document.createElement("div");
    // postElement.classList.add("blog-post");
    // postElement.style.cursor = "pointer"; // Add pointer cursor to the whole post

    // postElement.addEventListener("click", () => {
    //     window.location.href = `blog-post.html?id=${post.id}`; // Redirect when the post is clicked
    // });

    // const titleElement = document.createElement("h2");
    // titleElement.textContent = post.title;

    // const contentElement = document.createElement("p");
    // contentElement.textContent = post.preview;

    // const authorElement = document.createElement("p");
    // authorElement.textContent = `Author: ${post.author}`;

    // const dateElement = document.createElement("p");
    // dateElement.textContent = `Date: ${post.date}`;

    // postElement.appendChild(titleElement);
    // postElement.appendChild(contentElement);
    // postElement.appendChild(authorElement);
    // postElement.appendChild(dateElement);

    const imgStyle = `
        width:100%;    
        height: auto;
        border-radius: 15px;
        margin-bottom: 1rem;
    `;

    const titleStyle = `
        text-align: left;  
        font-size: 28px !important;
    `;

    postElement.innerHTML = `
        <div class="blog-post" style="cursor: pointer;">
            <img src="${post.featuredImage}" alt="${post.title}" style="${imgStyle}" />
            <h2 style="${titleStyle}" >${post.title}</h2>
            <p>${post.preview}</p>
            <p>Author: ${post.author}</p>
            <p>Date: ${post.date}</p>
        </div>
    `;

    postElement.querySelector(".blog-post").addEventListener("click", () => {
        window.location.href = `blog-post.html?id=${post.id}`;
    });


    return postElement;
}

function displayBlogPosts() {
    blogPosts.forEach(post => {
        const postElement = createBlogPostElement(post);
        blogContainer.appendChild(postElement);
    });
}

displayBlogPosts();
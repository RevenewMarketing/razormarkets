// post.js

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const postId = parseInt(getQueryParam('id'));

const post = blogPosts.find(blog => blog.id === postId);
console.log(post);

if (post) {
    const postContainer = document.getElementById(`single-post`);

    const imgStyle = `
        width: 100%;
        height: auto;
        border-radius: 15px;
        margin-bottom: 1rem;
    `;

    const titleStyle = `
       text-align: left;
    `;

    postContainer.innerHTML = `
        <img style="${imgStyle}" src="${post.featuredImage}" alt="${post.title}" />
        <h2 style="${titleStyle}" >${post.title}</h2>
        <p>${post.content}</p>
        <p>Author: ${post.author}</p>
        <p>Date: ${post.date}</p>
    `;


} else {
    document.getElementById("single-post").textContent = "Post not found.";
}
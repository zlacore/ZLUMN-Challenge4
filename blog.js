// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector("main");
const backBtn = document.querySelector("#back");
// TODO: Create a function that builds an element and appends it to the DOM
function createPost () {
    const postDiv = document.createElement("div");
    const blogUser = document.createTextNode(localStorage.getItem('username'));
    const blogTitle = document.createTextNode(localStorage.getItem('title'));
    const blogPost = document.createTextNode(localStorage.getItem('content'));
    postDiv.appendChild(blogUser);
    postDiv.appendChild(blogTitle);
    postDiv.appendChild(blogPost);
}

createPost();
// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

let redirectURL = 'file:///C:/Users/zlaco/bootcamp/challenges/challenge4/post.html';

backBtn.addEventListener('click', function (url) {
    redirectURL = url;
    location.assign(url);
  });

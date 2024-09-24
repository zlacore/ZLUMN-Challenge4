// TODO: Create a variable that selects the form element
const formEl = document.querySelector("form");
const submitBtn = document.querySelector("#submitbutton");
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const userId = document.getElementById('userid');
const fTitle = document.getElementById('title');
const blogContent = document.getElementById('content');
const user = localStorage.getItem('username');
const postTitle = localStorage.getItem('title');
const post = localStorage.getItem('content');

let redirectURL = 'https://www.youtube.com';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
  };
submitBtn.addEventListener('click', function (event) {
    //Grab form content using ids
    event.preventDefault();
    localStorage.setItem('username', userId.value);
    localStorage.setItem('title', fTitle.value);
    localStorage.setItem('content', blogContent.value);
    redirectPage();
});
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
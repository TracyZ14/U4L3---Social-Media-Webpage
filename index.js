let user = document.getElementById("user");
let name = document.getElementById("name");
let email = document.getElementById("email");
let userPhoto = document.getElementById("userPhoto");

let post1Photo = document.getElementById("post1Photo");
let post1Title = document.getElementById("post1Title");
let post1Body = document.getElementById("post1Body");

let post2Photo = document.getElementById("post2Photo");
let post2Title = document.getElementById("post2Title");
let post2Body = document.getElementById("post2Body");

let post3Photo = document.getElementById("post3Photo");
let post3Title = document.getElementById("post3Title");
let post3Body = document.getElementById("post3Body");

let friend1 = document.getElementById("friend1");
let friend1Photo = document.getElementById("friend1Photo");
let friend1Email = document.getElementById("friend1Email");

let friend2 = document.getElementById("friend2");
let friend2Photo = document.getElementById("friend2Photo");
let friend2Email = document.getElementById("friend2Email");

let friend3 = document.getElementById("friend3");
let friend3Photo = document.getElementById("friend3Photo");
let friend3Email = document.getElementById("friend3Email");

async function displayUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await response.json();
    
    user.innerHTML = userData[Math.floor(Math.random() * userData.length)].username;
    name.innerHTML = userData[Math.floor(Math.random() * userData.length)].name;
    email.innerHTML = userData[Math.floor(Math.random() * userData.length)].email;
    
    friend1.innerHTML = userData[Math.floor(Math.random() * userData.length)].username;
    friend1Email.innerHTML = userData[Math.floor(Math.random() * userData.length)].email;
    
    friend2.innerHTML = userData[Math.floor(Math.random() * userData.length)].username;
    friend2Email.innerHTML = userData[Math.floor(Math.random() * userData.length)].email;
    
    friend3.innerHTML = userData[Math.floor(Math.random() * userData.length)].username;
    friend3Email.innerHTML = userData[Math.floor(Math.random() * userData.length)].email;
}

displayUserData()
.then(response => {
    console.log("The user is displayed well. Yay!");
})
.catch(error => {
    console.log("There is an error here.");
});

async function displayPhotoData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photoData = await response.json();
    
    userPhoto.src = photoData[Math.floor(Math.random() * photoData.length)].thumbnailUrl;
    
    post1Photo.src = photoData[Math.floor(Math.random() * photoData.length)].thumbnailUrl;
    post2Photo.src = photoData[Math.floor(Math.random() * photoData.length)].thumbnailUrl;
    post3Photo.src = photoData[Math.floor(Math.random() * photoData.length)].thumbnailUrl;
    
    friend1Photo.src = photoData[Math.floor(Math.random() * photoData.length)].thumbnailUrl;
    friend2Photo.src = photoData[Math.floor(Math.random() * photoData.length)].thumbnailUrl;
    friend3Photo.src = photoData[Math.floor(Math.random() * photoData.length)].thumbnailUrl;
}

displayPhotoData()
.then(response => {
    console.log("The photo is displayed well. Yay!");
})
.catch(error => {
    console.log("There is an error here.");
});

async function displayPostData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postData = await response.json();
    
    post1Title.innerHTML = postData[Math.floor(Math.random() * postData.length)].title;
    post1Body.innerHTML = postData[Math.floor(Math.random() * postData.length)].body;
    
    post2Title.innerHTML = postData[Math.floor(Math.random() * postData.length)].title;
    post2Body.innerHTML = postData[Math.floor(Math.random() * postData.length)].body;
    
    post3Title.innerHTML = postData[Math.floor(Math.random() * postData.length)].title;
    post3Body.innerHTML = postData[Math.floor(Math.random() * postData.length)].body;
}

displayPostData()
.then(response => {
    console.log("The post is displayed well. Yay!");
})
.catch(error => {
    console.log("There is an error here.");
})
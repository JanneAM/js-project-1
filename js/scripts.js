//change background image

function startScript() {
  document.body.style.backgroundImage = 'url("img/bg.jpg")';
}

//Run script after page is loaded

document.addEventListener("DOMContentLoaded", startScript());

//create wrapper div and set attributes

let wrapperDiv = document.createElement("DIV");
wrapperDiv.setAttribute("id", "title-wrapper");

//append wrapper div
document.body.appendChild(wrapperDiv);

//add style to the wrapper div
document.getElementById("title-wrapper").style.cssText =
  " top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase; ";

//create under progress headline and set attributes
let underProgress = document.createElement("H1");
underProgress.setAttribute("id", "title");
underProgress.innerText = "Work under progress..";

//append headline to wrapper div
document.getElementById("title-wrapper").appendChild(underProgress);

//add style to the headline
document.getElementById("title").style.cssText =
  "width: fit-content; margin: auto; background: black; color: white;";

//create unordered list, set attributes and append it to body
let unorderedL = document.createElement("UL");
unorderedL.setAttribute("id", "nav");
document.body.appendChild(unorderedL);

//create list elements for unorderedlist
let liHome = document.createElement("li");
let liNews = document.createElement("li");
let liContact = document.createElement("li");
let liAbout = document.createElement("li");

//set links for list elements
liHome.innerHTML = '<a id="home" class="btn" href="default.asp">Home</a>';
liNews.innerHTML = '<a id="home" class="btn" href="news.asp">News</a>';
liContact.innerHTML =
  '<a id="contact" class="btn" href="contact.asp">Contact</a>';
liAbout.innerHTML = '<a id="about" href="#" class="btn">About</a>';

//append list elements for unordered list
document.getElementById("nav").appendChild(liHome);
document.getElementById("nav").appendChild(liNews);
document.getElementById("nav").appendChild(liContact);
document.getElementById("nav").appendChild(liAbout);

//create content div and set attributes
let contentDiv = document.createElement("DIV");
contentDiv.setAttribute("id", "content");

document.body.appendChild(contentDiv);

let welcomeMessage = document.createElement("H1");
welcomeMessage.setAttribute("id", "welcome");

//add function loadabout I HAVE NO IDEA WHY
document
  .getElementById("about")
  .addEventListener("click", function loadAbout() {
    document.getElementById("content").appendChild(welcomeMessage);
    welcomeMessage.innerText = "Welcome!";
    document.getElementById("welcome").style.cssText =
      "width: fit-content; margin: auto; background: black; color: white;";

    document.getElementById("title-wrapper").style.display = "none";
  });

let backgroundUrl = "img/bg.jpg"; //url for the background image to be used

//script to be run on pageload
function startScript() {
  changeBackground(backgroundUrl);
}
/** Function for changing background image of body
 * @param  {} url url for bg image
 * @param  {} {document.body.style.backgroundImage='url("'+url+'" set background image
 */

function changeBackground(url) {
  document.body.style.backgroundImage = 'url("' + url + '")';
}

/** Function for creating element
 * @param  {} type type of the element
 * @param  {} attributes={} object of attributes. CLASSES SHOULD BE LISTED IN TO AN ARRAY
 * @param  {} parent name of the parent element where child is appended to
 * @param  {} ;for(varkeyinattributes Loop through attributes object and create attributes
 * @param  {} {if(key=="class" if key is class handle it as array
 * @param  {} element element which is appended to given parent
 */
function createElement({
  type,
  attributes = {},
  parent,
  innerText,
  innerHTML,
}) {
  var element = document.createElement(type);
  for (var key in attributes) {
    if (key == "class") {
      element.classList.add.apply(element.classList, attributes[key]); // add all classes at once
    } else {
      element[key] = attributes[key];
    }
  }
  appendChild(parent, element);

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  if (innerText) {
    element.innerText = innerText;
  }
}

/** This function is used through createElement function
 * @param  {} parent name of the element where to append. Write body or id of parent
 * @param  {} element name of element to be appended
 * @param  {} {if(parent==="body" if parent is body append to body
 * @param  {} ;}else{document.getElementById(parent else append to given id
 */
function appendChild(parent, element) {
  if (parent === "body") {
    document.body.appendChild(element);
  } else {
    document.getElementById(parent).appendChild(element);
  }
}

//Run script after page is loaded
document.addEventListener("DOMContentLoaded", startScript());

//create wrapper div and set attributes

let wrapperDiv = createElement({
  type: "div",
  attributes: { id: "title-wrapper" },
  parent: "body",
});

//add style to the wrapper div
document.getElementById("title-wrapper").style.cssText =
  " top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase; ";

//create under progress headline and set attributes
let underProgress = createElement({
  type: "H1",
  attributes: { id: "title" },
  parent: "title-wrapper",
  innerText: "Work under progress",
});

//add style to the headline
document.getElementById("title").style.cssText =
  "width: fit-content; margin: auto; background: black; color: white;";

//create unordered list, set attributes and append it to body
let unorderedL = createElement({
  type: "UL",
  attributes: { id: "nav" },
  parent: "body",
});

let listItems = [
  {
    type: "li",
    attributes: {},
    parent: "nav",
    innerText: "",
    innerHTML: '<a id="home" class="btn" href="home.asp">Home</a>',
  },
  {
    type: "li",
    attributes: {},
    parent: "nav",
    innerText: "",
    innerHTML: '<a id="news" class="btn" href="news.asp">News</a>',
  },
  {
    type: "li",
    attributes: {},
    parent: "nav",
    innerText: "",
    innerHTML: '<a id="contact" class="btn" href="contact.asp">Contact</a>',
  },
  {
    type: "li",
    attributes: {},
    parent: "nav",
    innerText: "",
    innerHTML: '<a id="about" class="about" href="#">About</a>',
  },
];

listItems.forEach(function loopList(item) {
  createElement(item);
});

//create content div and set attributes
let contentDiv = createElement({
  type: "DIV",
  attributes: { id: "content" },
  parent: "body",
});

//add function loadabout I HAVE NO IDEA WHY
document
  .getElementById("about")
  .addEventListener("click", function loadAbout() {
    let welcomeMessage = createElement({
      type: "h1",
      attributes: { id: "welcome" },
      parent: "content",
      innerText: "Welcome",
    });

    document.getElementById("welcome").style.cssText =
      "width: fit-content; margin: auto; background: black; color: white;";

    document.getElementById("title-wrapper").style.display = "none";
  });

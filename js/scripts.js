function startScript() {
  document.body.style.backgroundImage = 'url("img/bg.jpg")';
}
document.addEventListener("DOMContentLoaded", startScript());

var wrapperDiv = document.createElement("DIV");
wrapperDiv.setAttribute("id", "title-wrapper");

document.body.appendChild(wrapperDiv);

document.getElementById("title-wrapper").style.cssText =
  " top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase; ";

var underProgress = document.createElement("H1");
underProgress.setAttribute("id", "title");
underProgress.innerText = "Work under progress..";

document.getElementById("title-wrapper").appendChild(underProgress);

document.getElementById("title").style.cssText =
  "width: fit-content; margin: auto; background: black; color: white;";

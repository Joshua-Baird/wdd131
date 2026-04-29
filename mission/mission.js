let selectElem = document.querySelector("select");
let logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
  let current = selectElem.value;
  if (current == "dark") {
    // code for changes to colors and logo
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    logo.setAttribute("src", "byui-logo-white.png");
    document.querySelector("select").style.backgroundColor = "#000";
    document.querySelector("select").style.color = "#fff";
  } else {
    // code for changes to colors and logo
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    logo.setAttribute("src", "byui-logo-blue.webp");
    document.querySelector("select").style.backgroundColor = "#fff";
    document.querySelector("select").style.color = "#000";
  }
}

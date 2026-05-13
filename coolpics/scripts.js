let btn = document.querySelector(".menu-btn");
let nav = document.querySelector("nav");
let gallery = document.querySelector("#gallery");
let modal = document.querySelector("dialog");
let modalImage = modal.querySelector("img");
let closeButton = modal.querySelector(".close-viewer");

// Event listener for opening the modal
gallery.addEventListener("click", openModal);
// Code to show modal  - Use event parameter 'e'
function openModal(e) {
  console.log(e.target);
  const img = e.target;
  const src = img.getAttribute("src");
  const alt = img.getAttribute("alt");
  const full = src.replace("sm", "full");
  modalImage.setAttribute("src", full);
  modalImage.setAttribute("alt", alt);
  modal.showModal();
}
// Close modal on button click
closeButton.addEventListener("click", () => {
  console.log("close button clicked");
  modal.close();
});
// Close modal if clicking outside the image
modal.addEventListener("click", (event) => {
  console.log("modal clicked");
  if (event.target === modal) {
    console.log("clicked outside the image");
    modal.close();
  }
});
// Toggle navigation menu on button click
btn.addEventListener("click", function () {
  nav.classList.toggle("hide");
});

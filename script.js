const shareButton = document.getElementById("share-btn");
const shareBar = document.querySelector(".share-bar");

shareButton.addEventListener("click", toggleSharebar);

function toggleSharebar() {
  shareBar.classList.toggle("show");
}
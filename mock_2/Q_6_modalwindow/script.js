const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];

// Open the modal
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable scrolling
});

// Close the modal when clicking on the close button
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Enable scrolling
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  }
});
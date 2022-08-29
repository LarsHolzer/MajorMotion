const menuToggle = document.querySelector(".toggle")
const showcase = document.querySelector(".showcase")

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active")
    showcase.classList.toggle("active")
})

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
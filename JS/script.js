
// Open Contact Formular

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

// fade in Contact form

let myForm = document.getElementById("myForm")
document.getElementById("open-button").onclick = function(){
  myLogo.classList.toggle("fade")
}

//open nav 2
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// open landingpage
 
function mvlandingpage() {
  window.location.href = "../index.html";
}
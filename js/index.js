// Get the modal
var modal = document.getElementById("myModal"); 

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
}


function clickClose() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var displayMode = document.getElementById("displaymode");
 displayMode.onclick = function (){
  document.body.classList.toggle("darkmode");
  if(document.body.classList.contains("darkmode")){
    displayMode.src= "images/sun.png";
  }else {
    displayMode.src= "images/night-mode.png";
  };
}
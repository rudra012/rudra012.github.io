
function greeting() {
  var checkBox = document.getElementById("myCheck");
  var mood = localStorage.getItem("mood")
  var lan = localStorage.getItem("lan")
  if (mood != null)
    checkBox.checked = true;
  darkandwhite()
  var date = new Date();
  var hour = date.getHours();
  if (hour > 16) {
    var wish = "Good Evening !!"
  } else if (hour > 12) {
    var wish = "Good Afternoon !!"
  } else if (hour >= 0) {
    var wish = "Good Morning !!"
  }
  document.getElementById("Good-wish").innerHTML = wish;

}

// Change Light/Dark mode
function darkandwhite() {
  var checkBox = document.getElementById("myCheck");
  var background = document.body;
  if (checkBox.checked) {
    background.className = "w3-black";
    localStorage.setItem("mood", "Dark");
  } else {
    background.className = "w3-white"
    localStorage.removeItem('mood');
  }
}

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

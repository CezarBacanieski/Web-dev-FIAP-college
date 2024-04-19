// login validation

function validate() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;

  if (user === "Admin" && password === "123") {
    window.open("dashboard.html");
  } else {
    alert("Invalid user and password");
  }
}

// making an automatic slideshow

let images = ["./img/car1.jpg", "./img/car2.jpg", "./img/car3.jpg"];
let index = 0;
let time = 1000;

function slideShow() {
  document.getElementById("img-banner").src = images[index];
  index++;

  if (index == images.length) {
    index = 0;
  }

  setTimeout("slideShow()", time);
}

slideShow();

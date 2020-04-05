const image = document.getElementById("img");
const password_field = document.getElementById("field");
const keys = document.getElementsByClassName("letter");

var password = "super dlugie haslo".toUpperCase();
var hashedPassword = "";
var failures = 0;

Array.prototype.forEach.call(keys, function (el) {
  el.addEventListener("click", () => {
    check(el);
  });
});

function hidePassword(password) {
  for (let index = 0; index < password.length; index++) {
    if (password.charAt(index) == " ") hashedPassword += " ";
    hashedPassword += "-";
  }
}

function check(element) {
  var match = false;
  var key = element.innerHTML;
  for (let index = 0; index < password.length; index++) {
    if (password.charAt(index) == key) {
      match = true;
      hashedPassword = setCharAt(hashedPassword, index, key);
    }
  }
  password_field.innerHTML = hashedPassword;
  if (match == false) {
    failures += 1;
    element.classList.add("fail");
    element.disabled = true;
    updateImg(failures);
  }
}

function startUp() {
  hidePassword(password);
  password_field.innerHTML = hashedPassword;
}

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  else return str.substr(0, index) + chr + str.substr(index + 1);
}

function updateImg(fails) {
  image.src = "./img/gallows-" + fails + ".png";
}

window.onload = startUp;

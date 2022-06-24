const inptDiv = document.querySelector(".input-email");
let pTag = document.createElement("p");
const btn = document.querySelector("button");
const inpt = document.querySelector("#input");
var emailRegex = /^\S+@\S+\.\S+$/;


function checkEmail(event) {
  event.preventDefault();

  let email = emailRegex.test(inpt.value);
  console.log("inpt: ", inpt);              //  <input type="text" id="input" placeholder="Email Address">
  console.log("inpt.value: ", inpt.value);  // inpt.value:  anystring@anystring.anystring

  if (email !== true) {
    pTag.className = "error-klasa";
    pTag.innerHTML = `Please provide a valid email`;
    inptDiv.appendChild(pTag);
  } else if (email === true) {
    pTag.className = "good-klasa";
    pTag.innerHTML = `Thank you for submiting your email`;
    inptDiv.appendChild(pTag);
  }
}

function removeClass() {
    pTag.remove();
}

btn.addEventListener("click", checkEmail);
inpt.addEventListener("click", removeClass);




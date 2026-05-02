let input = document.querySelector("#nameInput");
let output = document.querySelector("#output");
let count = document.querySelector("#count");

input.addEventListener("input", function () {
  if (input.value === "") {
    output.textContent = "Start typing...";
  } else {
    output.textContent = input.value;
  }

  count.textContent = input.value.length + " characters";
});

const inputText = document.querySelector("#txt");
const button1 = document.querySelector(".btn-list");
const list = document.querySelector(".container ul");


button1.addEventListener("click", (e) => {
  if (inputText.value != "") {
    e.preventDefault();

//create list
const myLi = document.createElement("li");
myLi.innerHTML = inputText.value;
list.appendChild(myLi);

//create span
const mySpan = document.createElement("span");
mySpan.innerHTML = "x";
myLi.appendChild(mySpan);
}
//for closing span or removing list
const close = document.querySelectorAll("span");
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      close[i].parentElement.style.opacity = 0;
      setTimeout(() => {
        close[i].parentElement.style.display = "none";
      }, 500);
    });
  }

  inputText.value = "";
});
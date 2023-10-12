const langEnLink = document.getElementById("lang-en");
const langUaLink = document.getElementById("lang-ua");

langEnLink.addEventListener("click", () => {
  langUaLink.classList.remove("header__language--active");
  langEnLink.classList.add("header__language--active");
});

langUaLink.addEventListener("click", () => {
  langEnLink.classList.remove("header__language--active");
  langUaLink.classList.add("header__language--active");
});

function handleSubmit(event) {
  event.preventDefault();

  let usernameInput = document.getElementById("name");
  let cellphoneInput = document.getElementById("phone");
  let usernameInput1 = document.getElementById("name1");
  let cellphoneInput1 = document.getElementById("phone1");

  console.log(usernameInput.value);
  console.log(cellphoneInput.value);
  console.log(usernameInput1.value);
  console.log(cellphoneInput1.value);

  usernameInput.value = "";
  cellphoneInput.value = "";
  usernameInput1.value = "";
  cellphoneInput1.value = "";
}

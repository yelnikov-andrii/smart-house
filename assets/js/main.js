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

  console.log(usernameInput.value);
  console.log(cellphoneInput.value);

  usernameInput.value = "";
  cellphoneInput.value = "";
}

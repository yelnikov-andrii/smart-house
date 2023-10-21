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

function isNumericInput(event) {
  const inputValue = event.target.value;
  return !isNaN(inputValue) || inputValue === '+';
}

function onPhoneInput(event) {
  if (!isNumericInput(event)) {
    return;
  }
}

function onPhoneInput1(event) {
  if (!isNumericInput(event)) {
    return;
  }
}

document.getElementById("phone").addEventListener("input", onPhoneInput);
document.getElementById("phone1").addEventListener("input", onPhoneInput1);

function isValidPhoneNumber(phoneNumber) {
  const internationalPhoneRegex = /^\+380\d{9}$/;

  const localPhoneRegex = /^(0\d{9}|09\d{8}|06\d{8})$/;

  return internationalPhoneRegex.test(phoneNumber) || localPhoneRegex.test(phoneNumber);
}

function handleSubmit(event) {
  event.preventDefault();

  let usernameInput = document.getElementById("name");
  let cellphoneInput = document.getElementById("phone");
  let usernameInput1 = document.getElementById("name1");
  let cellphoneInput1 = document.getElementById("phone1");

  if (isValidPhoneNumber(cellphoneInput.value)) {
    console.log(usernameInput.value);
    console.log(cellphoneInput.value);
  } else {
    console.error("Некорректный номер телефона!");
  }

  if (isValidPhoneNumber(cellphoneInput1.value)) {
    console.log(usernameInput1.value);
    console.log(cellphoneInput1.value);
  } else {
    console.error("Некорректный номер телефона!");
  }

  usernameInput.value = "";
  cellphoneInput.value = "";
  usernameInput1.value = "";
  cellphoneInput1.value = "";
}

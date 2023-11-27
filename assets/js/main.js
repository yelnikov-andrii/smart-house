// languages changing 

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

// language changing end

// form action

const phoneInput = document.getElementById("phone");
const phoneInput1 = document.getElementById("phone1");

document.getElementById("phone").addEventListener("input", onPhoneInput);
document.getElementById("phone1").addEventListener("input", onPhoneInput1);

function onPhoneInput(event) {
  const cleanedValue = event.target.value.replace(/[^+\d]/g, '');
  phoneInput.value = cleanedValue;
}

function onPhoneInput1(event) {
  const cleanedValue = event.target.value.replace(/[^+\d]/g, '');
  phoneInput1.value = cleanedValue;
}

// vaidation phone number

function isValidPhoneNumber(phoneNumber) {
  const internationalPhoneRegex = /^\+380\d{9}$/;

  const localPhoneRegex = /^(0\d{9}|09\d{8}|06\d{8})$/;

  return internationalPhoneRegex.test(phoneNumber) || localPhoneRegex.test(phoneNumber);
}

// vaidation phone number end

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

// form action end

// scrolling header start

let lastScrollTop = 0;
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        header.classList.add("header__hidden");

      } else {
          header.classList.remove("header__hidden");
      }

      lastScrollTop = scrollTop;
    });

    // scrolling header end

    // furniture actions start

    const furnitureListItems = document.getElementsByClassName('furniture__item');
    const images = document.querySelectorAll('.furniture__img');

    for (let i = 0; i < furnitureListItems.length; i++) {
      const listItem = furnitureListItems[i];
    
      listItem.onmouseover = () => {
        setActiveImageFurniture(i);
      };
    }

    function setActiveImageFurniture(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add('furniture__img--active');
        } else {
          image.classList.remove('furniture__img--active');
        }
      });
    }

       // furniture actions end

      // energy actions start

    const energyListItems = document.getElementsByClassName('energy__span');
    const energImages = document.querySelectorAll('.energy__image');

    for (let i = 0; i < energyListItems.length; i++) {
      const listItemEnergy = energyListItems[i];
    
      listItemEnergy.onmouseover = () => {
        setActiveImageEnergy(i);
      };
    }

    function setActiveImageEnergy(index) {
      energImages.forEach((image, i) => {
        if (i === index) {
          image.classList.add('energy__image--active');
        } else {
          image.classList.remove('energy__image--active');
        }
      });
    }

    // energy actions end
       





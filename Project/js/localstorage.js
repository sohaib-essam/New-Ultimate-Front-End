// Vars
let fontsSelect = document.querySelector(".settings-box .option-box.font-options select");
let colorOptions = document.querySelectorAll(".settings-box .option-box.color-options ul li");
let fontOptions = document.querySelectorAll(".settings-box .option-box.font-options select option");

if (localStorage.getItem("color")) {
  color = JSON.parse(localStorage.getItem("color"));
  document.body.classList.add(color.color)
  colorOptions.forEach(option => {
    option.classList.remove("active");
    if (color.color === option.dataset.color) {
      option.classList.add("active");
    }
  })
}
if (localStorage.getItem("font")) {
  font = JSON.parse(localStorage.getItem("font"));
  document.body.classList.add(font.font);
  fontOptions.forEach(option => {
    if (font.font === option.value) {
      option.setAttribute("selected", "selected");
    }
  })
}

colorOptions.forEach(option => {
  option.addEventListener("click", function () {
    updateLocalstorage("color", option.dataset.color)
  })
});
fontsSelect.addEventListener("change", function () {
  fontOptions.forEach(option => {
    if (option.value === fontsSelect.value) {
      updateLocalstorage("font", option.value)
    }
  })
});

function updateLocalstorage (itemName, itemValue) {
  option = {};
  option[itemName] = itemValue;
  window.localStorage.setItem(itemName, JSON.stringify(option));
}
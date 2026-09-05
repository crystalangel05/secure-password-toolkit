

 window.generatePassword = function () {


const length = Number(document.getElementById("length").value);

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const selectedOptions =[];

const characterSets = {
uppercase:"QWERTYUIOPASDFGHJKLZXCVBNM",
lowercase:"qwertyuiopasdfghjklzxcvbnm",
numbers:"1234567890",
symbols:"!@#$%&"
};
checkboxes.forEach((checkbox) => {

  if(checkbox.checked) {
    selectedOptions.push(checkbox.id);
    
  }

});

if (selectedOptions.length === 0) {
    alert("Please select at least one character type.");
    return;
}
if (length < selectedOptions.length) {
    alert("Password length must be at least the number of selected character types.");
    return;
}

let characterPool ="";

selectedOptions.forEach((option) => {
  characterPool += characterSets[option];
});


let password = "";

selectedOptions.forEach((option) => {
const characters = characterSets[option];
const randomIndex = Math.floor(Math.random() * characters.length);
const randomCharacter = characters[randomIndex];
password += randomCharacter;
});


for (let i = 0; i < length - selectedOptions.length; i++) {

    const randomIndex = Math.floor(Math.random() * characterPool.length);

    const randomCharacter = characterPool[randomIndex];

    password += randomCharacter;

}

let passwordArray = password.split("");
passwordArray.sort(() => Math.random() - 0.5);
password = passwordArray.join("");

document.getElementById("generatedPassword").value = password;

}

document.querySelector(".generateBtn").addEventListener("click", generatePassword);

document.getElementById("copyPassword").addEventListener("click", function () {
  const password = document.getElementById("generatedPassword").value;

if (!password) {
  alert("No password to copy. Please generate a password first.");
  return;
}

navigator.clipboard.writeText(password).then (function () {
  alert("Password copied to clipboard!");
})
.catch(function () {
  alert("Failed to copy password. Please try again.");
});
});

const passwordInput = document.querySelector('.password-box input'),
    copyIcon = document.querySelector('.password-box .copy-icon'),
    rangeInput = document.querySelector('.range-box input'),
    sliderNumber = document.querySelector('.range-box .slider-number'),
    generateButton = document.querySelector('.generate-button');

// Characters oF  Alphabets (a-z/A-Z), Numbers(0-9) and symbols($%&...)
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+|><,.?{}[]:;~";


// This function will be called on, page reload, generateButton clicked and rangeInput slide
const generatePassword = () => {
    let newPassword = "";


    // for loop will run till range input value
    for (let i = 0; i < rangeInput.value; i++) {
        let randomNumbers = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomNumbers];
    }
    passwordInput.value = newPassword  
    copyIcon.classList.replace("uil-file-check-alt", "uil-copy")    // replace copy icon
};

rangeInput.addEventListener("input", () => {
    sliderNumber.innerText = rangeInput.value;
    generatePassword();
});

// Copy password input on copyIcon click
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt")    // replace copy icon
});


generatePassword();
generateButton.addEventListener("click", generatePassword);
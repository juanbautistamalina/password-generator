const passwordBox = document.getElementById("password");
const btnGenerate = document.querySelector("button");
const btnCopy = document.getElementById("copy");
const lenght = 12; // Longitud de la contraseña


// Carácteres que forman a la contraseña
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-="
const allChars = upperCase + lowerCase + number + symbol;



btnGenerate.addEventListener("click", createPassword);
btnCopy.addEventListener("click", copyPassword);

// Función que genera la contraseña de manera aleatoria
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
   passwordBox.value = password
}

// Función para copiar la contraseña
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}




const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();
  if (validateForm()) {
    // Enviar los datos al servidor o realizar alguna acción con los datos válidos
    console.log("Formulario válido. Datos enviados al servidor.");
  }
});

function clearErrors() {
  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));
}

function validateForm() {
  let isValid = true;
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (username === "") {
    displayError(usernameInput, "El nombre de usuario es obligatorio.");
    isValid = false;
  } else if (username.length < 3) {
    displayError(
      usernameInput,
      "El nombre de usuario debe tener al menos 3 caracteres."
    );
    isValid = false;
  }

  // Validar el formato del email utilizando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    displayError(emailInput, "El email es obligatorio.");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    displayError(emailInput, "El email no es válido.");
    isValid = false;
  }

  if (password === "") {
    displayError(passwordInput, "La contraseña es obligatoria.");
    isValid = false;
  } else if (password.length < 6) {
    displayError(
      passwordInput,
      "La contraseña debe tener al menos 6 caracteres."
    );
    isValid = false;
  } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    displayError(
      passwordInput,
      "La contraseña debe contener al menos una letra y un número."
    );
    isValid = false;
  }

  if (confirmPassword === "") {
    displayError(confirmPasswordInput, "Debe confirmar la contraseña.");
    isValid = false;
  } else if (confirmPassword !== password) {
    displayError(confirmPasswordInput, "Las contraseñas no coinciden.");
    isValid = false;
  }

  return isValid;
}

function displayError(input, errorMessage) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = errorMessage;
}

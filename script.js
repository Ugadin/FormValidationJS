const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //Obtendo os valores dos inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Preencha o nome de Usuario");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Preencha o email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email não é valido");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Preencha o campo senha");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Confirme a senha");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Senhas não coincidem"); //caso queira validar o formato da senha procure por um regex em um função no no isEmail
  } else {
    setSuccessFor(password2);
  }

  
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  //adiciona a mensagem de erro dentro do small
  small.innerText = message;

  //adiciona a classe error
  formControl.className = "form-control error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

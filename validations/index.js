function validarEmail(email){
  const emailRegEx = /[a-zA-Z0-9_]{2,}\@[a-zA-Z0-9_]{2,}\.[a-zA-Z0-9_]{2,}/;
  if (!emailRegEx.test(email)){
    const err = new Error('Email inválido.');
    err.input = 'email';
    throw err;
  }
}

function validarSenha(password){
  const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()_\-|+=\[\]{}\/?]).{8,}$/;
  if (!passwordRegEx.test(password)){
    const err = new Error('Senha inválida.');
    err.input = 'password';
    throw err;
  }
}

document.addEventListener('DOMContentLoaded', iniciar);

function iniciar(){
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    try {
      validarEmail(emailInput.value);
      emailInput.classList.add('success');

      validarSenha(passwordInput.value);
      passwordInput.classList.add('success');
      successMessage.textContent = 'Cadastrado com sucesso!';
      successMessage.style.color = 'green';
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';

    } catch(e) {
      if (e.input === 'email') {
        emailInput.classList.add('error');
      } else if (e.input === 'password') {
        passwordInput.classList.add('error');
      }

      successMessage.style.display = 'none';
      errorMessage.style.color = 'red';
      errorMessage.style.display = 'block';
    }
  });

  emailInput.addEventListener('input', () => {
    resetarEstilos(emailInput);
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
  });

  passwordInput.addEventListener('input', () => {
    resetarEstilos(passwordInput);
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
  });
}

function resetarEstilos(input) {
  input.classList.remove('success', 'error');
}

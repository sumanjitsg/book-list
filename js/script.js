const submit = document.querySelector('#form button[type="submit"]');

function handleSubmit(e) {
  e.preventDefault();
}

submit.addEventListener('submit', handleSubmit);
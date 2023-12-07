const regaForm = document.querySelector('.regaForm');
if (regaForm) {
  regaForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { name, email, password } = event.target;
    console.log(event.target);
    try {
      const response = await fetch('/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
          score: 0,
        }),
      });
      const data = await response.json();
      if (data.message === 'success') {
        window.location.href = '/categories';
      }
    } catch ({ message }) {
      console.log(message);
    }
  });
}

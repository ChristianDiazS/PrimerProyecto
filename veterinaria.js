
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Agregar un evento al enviar el formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Validar que se hayan ingresado los campos requeridos
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Enviar el formulario usando un servicio de email
  const data = {
    service_id: 'default_service',
    template_id: 'template_1234567890',
    user_id: 'user_1234567890',
    template_params: {
      from_name: nameInput.value,
      from_email: emailInput.value,
      message: messageInput.value,
    },
  };

  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(function(response) {
      if (response.ok) {
        alert('¡Gracias por contactarnos! Te responderemos lo antes posible.');
        form.reset();
      } else {
        alert('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.');
      }
    })
    .catch(function(error) {
      alert('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.');
    });
});

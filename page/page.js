document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const data = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      platform: document.getElementById('platform').value,
    };
  
    chrome.storage.local.set(data, function() {
      alert('Datos guardados exitosamente!');
    });
  });
  
  // Mostrar/ocultar campos adicionales según la plataforma seleccionada
  document.getElementById('platform').addEventListener('change', function() {
    const platform = this.value;
    const linkedinFields = document.getElementById('linkedinFields');
    const magnetoFields = document.getElementById('magnetoFields');
  
    if (platform === 'LinkedIn') {
      linkedinFields.classList.remove('hidden');
      magnetoFields.classList.add('hidden');
    } else if (platform === 'Magneto') {
      magnetoFields.classList.remove('hidden');
      linkedinFields.classList.add('hidden');
    } else {
      linkedinFields.classList.add('hidden');
      magnetoFields.classList.add('hidden');
    }
  });
  
  // Cambiar el idioma (este código es del ejemplo anterior)
  document.getElementById('language').addEventListener('change', function() {
    const lang = this.value;
  
    if (lang === 'es') {
      document.querySelector('label[for="firstName"]').innerText = 'Nombre *';
      document.querySelector('label[for="lastName"]').innerText = 'Apellidos *';
      document.querySelector('label[for="email"]').innerText = 'Correo electrónico *';
      document.querySelector('label[for="phone"]').innerText = 'Número de teléfono';
      document.querySelector('label[for="platform"]').innerText = 'Plataforma desde la cual desea trabajar:';
      document.querySelector('input[type="submit"]').value = 'ENVIAR';
      document.querySelector('label[for="experienciaLaboral"]').innerText = 'Experiencia Laboral';
      document.querySelector('label[for="educacion"]').innerText = 'Educación';
      document.querySelector('label[for="idiomas"]').innerText = 'Idiomas';
      document.querySelector('label[for="resumenProfesional"]').innerText = 'Resumen Profesional';
      document.querySelector('label[for="fechaDeNacimiento"]').innerText = 'Fecha de Nacimiento';
      document.querySelector('label[for="direccionDeResidencia"]').innerText = 'Dirección de Residencia';
      document.querySelector('label[for="estadoCivil"]').innerText = 'Estado Civil';
      document.querySelector('label[for="pretensionSalarial"]').innerText = 'Pretensión Salarial';
      document.querySelector('label[for="referenciasLaborales"]').innerText = 'Referencias Laborales';
    } else if (lang === 'en') {
      document.querySelector('label[for="firstName"]').innerText = 'First Name *';
      document.querySelector('label[for="lastName"]').innerText = 'Last Name *';
      document.querySelector('label[for="email"]').innerText = 'Email *';
      document.querySelector('label[for="phone"]').innerText = 'Phone Number';
      document.querySelector('label[for="platform"]').innerText = 'Platform you want to work from:';
      document.querySelector('input[type="submit"]').value = 'SUBMIT';
      document.querySelector('label[for="experienciaLaboral"]').innerText = 'Work Experience';
      document.querySelector('label[for="educacion"]').innerText = 'Education';
      document.querySelector('label[for="idiomas"]').innerText = 'Languages';
      document.querySelector('label[for="resumenProfesional"]').innerText = 'Professional Summary';
      document.querySelector('label[for="fechaDeNacimiento"]').innerText = 'Date of Birth';
      document.querySelector('label[for="direccionDeResidencia"]').innerText = 'Home Address';
      document.querySelector('label[for="estadoCivil"]').innerText = 'Marital Status';
      document.querySelector('label[for="pretensionSalarial"]').innerText = 'Salary Expectation';
      document.querySelector('label[for="referenciasLaborales"]').innerText = 'Work References';
    }
  }); 
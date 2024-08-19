document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const data = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      linkedin: document.getElementById('linkedin').value,
      magneto: document.getElementById('magneto').value
    };
  
    chrome.storage.local.set(data, function() {
      alert('Data saved successfully!');
    });
  });
  
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const formData = {
        personalDetails: {
          fullName: document.getElementById('name').value.trim(),
          dateOfBirth: document.getElementById('date').value.trim(),
          email: document.getElementById('email').value.trim(),
          mobileNumber: document.getElementById('number').value.trim(),
          gender: document.getElementById('gender').value.trim(),
          occupation: document.getElementById('occupation').value.trim()
        },
        identityDetails: {
          idType: document.getElementById('id').value.trim(),
          idNumber: document.getElementById('id number').value.trim(),
          issueAuthority: document.getElementById('issue').value.trim(),
          issueDate: document.getElementById('issue date').value.trim(),
          issueState: document.getElementById('issue state').value.trim(),
          expiryDate: document.getElementById('expiry').value.trim()
        }
      };
  
      console.log('Form Data:', formData);
    });
  });
  

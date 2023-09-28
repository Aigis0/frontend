document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitBtn');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    if (isValidString(firstName) && isValidString(lastName)) {
      alert('Form has been submitted');
    } else {
      alert('Incorrect input. Please enter valid first and last names.');
    }
  });

  function isValidString(value) {
    return typeof value === 'string' && value.length > 0;
  }
});

function checkPasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (password === confirmPassword) {
        errorMessage.textContent = '';
        alert('Passwords match. Form submitted!');

    } 
    
    else {
        errorMessage.textContent = 'Passwords do not match. Please try again.';
    }
}
//your JS code here. If required.
// Function to handle form submission
const handleLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    // If "Remember me" checkbox is checked, save details to local storage
    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        // If unchecked, remove details from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // Show alert with logged in message
    alert(`Logged in as ${username}`);
    
    // Check if there are saved details
    checkExistingUser();
};

// Function to check for existing user details
const checkExistingUser = () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // If there are saved details, display the existing user button
    if (savedUsername && savedPassword) {
        const existingButton = document.getElementById('existing');
        existingButton.style.display = 'inline-block';

        // Attach event listener to the existing user button
        existingButton.onclick = () => {
            alert(`Logged in as ${savedUsername}`);
        };
    }
};

// Attach the handleLogin function to the form's submit event
document.getElementById('submit').addEventListener('click', handleLogin);

// Check for existing user on page load
window.onload = checkExistingUser;

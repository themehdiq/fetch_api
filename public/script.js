
let myForm = document.getElementById("signup-form");
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

myForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    // const formData = new FormData(this); // Use 'this' instead of 'form'

    const userData = {
        username: usernameInput.value,
        password: passwordInput.value,
      };
    // Send AJAX request to backend
    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
        // Update frontend based on response
        if (data.exists) {
            // console.log(data.exists);
            document.getElementById('message').textContent = 'You are already registered.';
        } else {
            // console.log(data.exists);
            document.getElementById('message').textContent = 'Sign up successful!';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
  
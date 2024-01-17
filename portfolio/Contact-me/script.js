function submitForm() {
    // You can add validation logic here before submitting the form
    // For simplicity, this example just logs the form data to the console
 alert(`Form Submitted Successfully`);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can also send the form data to a backend server for further processing
    // Here, you might want to use an XMLHttpRequest, Fetch API, or a library like Axios
    // Example: fetch('your-backend-endpoint', { method: 'POST', body: JSON.stringify({ name, email, message }) });
}
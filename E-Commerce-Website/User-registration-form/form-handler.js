    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = e.currentTarget.getAttribute('href');

            if (!target.startsWith('#') && !target.startsWith('http')) {
                e.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = target;
                }, 300); 
            }
        });
    });    
document.addEventListener('DOMContentLoaded', function() {
    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents form from submitting traditionally

            const formData = new FormData(loginForm);
            const loginData = {
                email: formData.get('email'), // Assuming input name='email'
                password: formData.get('password') // Assuming input name='password'
            };

            console.log('Login Data:', loginData);
            // Process login data here (e.g., send to server)
        });
    }

    // Signup Form Submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents form from submitting traditionally

            const formData = new FormData(signupForm);
            const signupData = {
                fullName: formData.get('fullName'), // Assuming input name='fullName'
                email: formData.get('email'), // Assuming input name='email'
                password: formData.get('password'), // Assuming input name='password'
                confirmPassword: formData.get('confirmPassword') // Assuming input name='confirmPassword'
            };

            console.log('Signup Data:', signupData);
            // Process signup data here (e.g., send to server)
        });
    }

    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents form from submitting traditionally

            const formData = new FormData(forgotPasswordForm);
            const forgotPasswordData = {
                email: formData.get('email') // Assuming input name='email'
            };

            console.log('Forgot Password Data:', forgotPasswordData);
            // Process forgot password data here (e.g., send to server)
        });
    }
});

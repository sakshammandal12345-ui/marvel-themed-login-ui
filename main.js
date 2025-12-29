
document.addEventListener('DOMContentLoaded', function () {
    // Get form elements
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const signupLink = document.getElementById('signupLink');
    const socialButtons = document.querySelectorAll('.social-button');

    // login form submission
    loginForm.addEventListener('submit', handleLogin);

    // social login buttons
    socialButtons.forEach(button => {
        button.addEventListener('click', function () {
            const provider = this.getAttribute('data-provider');
            handleSocialLogin(provider);
        });
    });

    // Handle forgot password link
    forgotPasswordLink.addEventListener('click', handleForgotPassword);

    // Handle signup link
    signupLink.addEventListener('click', handleSignup);

    // Login form handler
    function handleLogin(e) {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;
        const remember = rememberCheckbox.checked;

        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Log the login attempt (in production, this would send to server)           // more to add later//
        console.log('Login attempt:', {
            email: email,
            password: '***hidden***',
            remember: remember
        }
                   );

        
        alert('Login functionality would be implemented here!\n\nEmail: ' + email + '\nRemember me: ' + remember);

        
    }

    // Social login handler
    function handleSocialLogin(provider) {
        console.log('Social login with:', provider);
        alert('Social login with ' + provider.charAt(0).toUpperCase() + provider.slice(1) + ' would be implemented here!');

      
    }

    // Forgot password handler
    function handleForgotPassword(e) {
        e.preventDefault();
        const email = emailInput.value;

        if (email) {
            alert('Password reset link would be sent to: ' + email);
        } else {
            alert('Please enter your email address first');
        }


    }

    // Signup handler
    function handleSignup(e) {
        e.preventDefault();
        alert('Sign up page would be shown here!');

        
    }

   
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

   
    if (localStorage.getItem('rememberedEmail')) {
        emailInput.value = localStorage.getItem('rememberedEmail');
        rememberCheckbox.checked = true;
    }

  
    loginForm.addEventListener('submit', function () {
        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberedEmail', emailInput.value);
        } else {
            localStorage.removeItem('rememberedEmail');
        }
    });

});

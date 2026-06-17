import { auth, createUserWithEmailAndPassword } from "./FirebaseConfig.js";;


function handleSignup() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;

    const emailError = document.getElementById('email-error');
    const passError = document.getElementById('pass-error');
    const confirmError = document.getElementById('confirm-error');

    // Reset errors
    emailError.style.display = 'none';
    passError.style.display = 'none';
    confirmError.style.display = 'none';


    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        emailError.style.display = 'block';
        // valid = false;
        return;
    }

    // Validate password length
    if (password.length < 8) {
        passError.style.display = 'block';
        // valid = false;
        return;
    }

    // Validate passwords match
    if (password !== confirm) {
        confirmError.style.display = 'block';
        // valid = false;
        return;
    }


    // alert('Account created successfully!');
    // Your submit logic here (e.g. API call)

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        alert("Account Created Successfully!");

        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
        document.getElementById('confirm').value = "";
        
        console.log(userCredential.user);
    }).catch((error) => {
        console.log(error.message);
        alert(error.message);
    });

}
// 🔥 FIX 1: Attach your function to the global window object so HTML can see it
// window.handleSignup = handleSignup;


document.getElementById('signup-btn').addEventListener('click', handleSignup);
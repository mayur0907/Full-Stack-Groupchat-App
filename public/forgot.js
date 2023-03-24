const form = document.getElementById('forgot-password-form');
const emailField = document.getElementById('email');
const baseUrl = `http://127.0.0.1:5500`;

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
        const email = emailField.value;
        console.log(email);
        let res = await axios.post(`${baseUrl}/password/forgotpassword`, {email: email});

        if(res.status === 200) {
            confirm(`${res.data.message}`);
            window.location.href = 'login.html';
        }

    } catch (error) {
        console.log(error);
    }
})
//  click eya icon then show password
export const handleShowPass = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
};
//  click eya icon then show confirm password
export const handleShowConfirmPass = () => {
    const confirmInput = document.getElementById("confirm");
    if (confirmInput.type === "password") {
        confirmInput.type = "text";
    } else {
        confirmInput.type = "password";
    }
};
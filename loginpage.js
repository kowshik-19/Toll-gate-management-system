document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const users = {
            admin: "admin123",
            staff: "staff123"
        };

        if (username in users && password === users[username]) {
            if (username === "admin") {
                window.location.href = "admin.html";
            } else if (username === "staff") {
                window.location.href = "staff.html";
            }
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
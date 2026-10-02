document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("loginForm");

    const password =
        document.getElementById("password");

    const togglePassword =
        document.getElementById("togglePassword");

    const forgotPassword =
        document.getElementById("forgotPassword");

    const registerLink =
        document.getElementById("registerLink");


    /* =========================
       SHOW / HIDE PASSWORD
    ========================= */

    togglePassword.addEventListener(
        "click",
        function () {

            if (password.type === "password") {

                password.type = "text";

                togglePassword.textContent = "Hide";

            } else {

                password.type = "password";

                togglePassword.textContent = "Show";

            }

        }
    );


    /* =========================
       LOGIN
    ========================= */

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const email =
                document.getElementById("email").value.trim();

            const passwordValue =
                password.value.trim();


            if (!email || !passwordValue) {

                alert(
                    "Please enter your email and password."
                );

                return;
            }


            if (passwordValue.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;
            }


            alert(
                "Login successful! Welcome to Grand Horizon Hotel."
            );

        }
    );


    /* =========================
       FORGOT PASSWORD
    ========================= */

    forgotPassword.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const email =
                document.getElementById("email").value.trim();


            if (!email) {

                alert(
                    "Please enter your email address first."
                );

                return;
            }


            alert(
                "Password reset instructions will be sent to: "
                + email
            );

        }
    );


    /* =========================
       REGISTER
    ========================= */

    registerLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            alert(
                "Registration page will be connected in the next step."
            );

        }
    );

});
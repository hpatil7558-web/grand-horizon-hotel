document.addEventListener("DOMContentLoaded", function () {

    console.log("Grand Horizon Hotel loaded successfully.");


    /* =========================
       BOOKING FORM
    ========================== */

    const bookingForm =
        document.querySelector(".booking-form");

    const checkIn =
        document.getElementById("checkIn");

    const checkOut =
        document.getElementById("checkOut");

    const guests =
        document.getElementById("guests");

    const roomType =
        document.getElementById("roomType");


    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                if (!checkIn.value) {

                    alert(
                        "Please select your check-in date."
                    );

                    return;
                }


                if (!checkOut.value) {

                    alert(
                        "Please select your check-out date."
                    );

                    return;
                }


                if (checkOut.value <= checkIn.value) {

                    alert(
                        "Check-out date must be after check-in date."
                    );

                    return;
                }


                if (!guests.value) {

                    alert(
                        "Please select the number of guests."
                    );

                    return;
                }


                if (!roomType.value) {

                    alert(
                        "Please select a room type."
                    );

                    return;
                }


                alert(
                    "Room availability checked successfully!"
                );

            }
        );

    }


    /* =========================
       MINIMUM DATE
    ========================== */

    const today =
        new Date().toISOString().split("T")[0];


    if (checkIn) {
        checkIn.min = today;
    }

    if (checkOut) {
        checkOut.min = today;
    }


    if (checkIn && checkOut) {

        checkIn.addEventListener(
            "change",
            function () {

                checkOut.min =
                    checkIn.value;

            }
        );

    }


    /* =========================
       SMOOTH NAVIGATION
    ========================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


    /* =========================
       GALLERY
    ========================== */

    document.querySelectorAll(
        ".gallery-item img"
    ).forEach(function (image) {

        image.addEventListener(
            "click",
            function () {

                window.open(
                    image.src,
                    "_blank"
                );

            }
        );

    });

});
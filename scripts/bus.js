document.addEventListener("DOMContentLoaded", function () {

    const seatButtons = document.querySelectorAll(".seat-btn");
    const pricePerSeat = 550;
    const selectedSeatsTable = document.getElementById("selected-seats-table");
    const seatCount = document.getElementById("seat-count");
    const totalPrice = document.getElementById("total-price");
    const couponInput = document.getElementById("coupon-input");
    const applyCoupon = document.getElementById("apply-coupon");
    const couponMessage = document.getElementById("coupon-message");
    const bookingForm = document.getElementById("booking-form");

    let currentDiscount = 0;


    seatButtons.forEach(button => {
        button.classList.add(
            "w-16",
            "h-16",
            "bg-gray-300",
            "rounded",
            "hover:bg-gray-400",
            "font-bold",
            "transition"
        );
    });

    seatButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            const isSelectedSeats = button.classList.contains("bg-green-500");
            const selectedSeats = document.querySelectorAll(".seat-btn.bg-green-500");

            if (isSelectedSeats) {
                button.classList.remove("bg-green-500");
            }
            else {
                if (selectedSeats.length >= 4) {
                    alert("You can select a maximum of 4 seats.");
                    return;
                }
                button.classList.add("bg-green-500", "text-white");
            }
            updateSeatTable();
        })

    })



    // Other event listeners and logic can go here too
});

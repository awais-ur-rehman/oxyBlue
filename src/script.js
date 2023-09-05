document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.addEventListener("mouseover", () => {
            cards.forEach((otherCard, otherIndex) => {
                if (otherIndex !== index) {
                    otherCard.style.transform = "translateX(-10%) scale(0.8)";

                }
            });
        });

        card.addEventListener("mouseout", () => {
            cards.forEach((otherCard) => {
                otherCard.style.transform = "translateX(0) scale(1)";

            });
        });
    });
});
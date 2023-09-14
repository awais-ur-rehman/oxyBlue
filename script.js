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



const navButton = document.querySelector('.navIcon');
const navMenu = document.querySelector('.navMenu');
const cancelIcon = document.querySelector('.cancelIcon');

navButton.addEventListener('click', () => {
    navMenu.classList.remove('hidden');
});

cancelIcon.addEventListener('click', () => {
    navMenu.classList.add('hidden');
});

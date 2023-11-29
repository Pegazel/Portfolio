document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.querySelector(".dark-mode-toggle");

    const body = document.body;

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        const img = darkModeToggle.querySelector("img");

    
        if (body.classList.contains("dark-mode")) {
            img.src = "images/soleil.png"; 
        } else {
            img.src = "images/soleil-dark.png"; 
        }
    });
});




const smallImages = document.querySelectorAll('.small-img');
const bigImage = document.querySelector('.big-img');

smallImages.forEach((smallImg) => {
    smallImg.addEventListener('click', () => {
        const clickedSrc = smallImg.getAttribute('src');
        smallImg.setAttribute('src', bigImage.getAttribute('src'));
        bigImage.setAttribute('src', clickedSrc);
        bigImage.classList.add('big-img');
    });
});

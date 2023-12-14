document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    const body = document.body;
    
    // Vérifie s'il y a un mode stocké localement
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    
    // Si le mode sombre était sélectionné, applique la classe correspondante
    if (isDarkMode) {
        body.classList.add("dark-mode");
        darkModeToggle.querySelector("img").src = "images/soleil.png";
    }
    
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDarkModeEnabled = body.classList.contains("dark-mode");
        
        // Stocke l'état du mode dans le stockage local
        localStorage.setItem("darkMode", isDarkModeEnabled);
        
        const img = darkModeToggle.querySelector("img");
        if (isDarkModeEnabled) {
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

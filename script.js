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




document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('header h1');
    const nav = document.querySelector('.soleil');
    const menu = document.querySelector('.menu');
    const darkMode = document.querySelector('.dark-mode-toggle');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const maxScroll = 100; // Position de défilement à partir de laquelle l'opacité est réduite

        if (scrollPosition > maxScroll) {
            // Calculez l'opacité en fonction de la position de défilement
            const opacity = 1 - (scrollPosition - maxScroll) / maxScroll;

            h1.style.opacity = opacity; // L'opacité du h1 baisse
            nav.style.opacity = opacity; // L'opacité de la nav baisse
            darkMode.style.opacity = 1; // L'opacité du bouton de mode sombre à 1
            menu.style.opacity = 1; // L'opacité du menu à 1

            if (opacity < 0) {
                nav.style.display = 'none'; 
            } else {
                h1.style.display = 'block'; 
                nav.style.display = 'block'; 
            }
        } else {
            h1.style.opacity = 1; 
            nav.style.opacity = 1; 
            darkMode.style.opacity = 1; 
            menu.style.opacity = 1
            nav.style.display = 'block';
        }
    });
});


// Données des projets 
const projects = [
    {
        title: "CV Vidéo",
        frontImage: "images/cvvideo.png",
        rightImage: "images/cvvideo2.png",
        year: "Jan 2024",
        price: "Video",
        lien: "cvvideo.html",
        details: [
            "Adobe Audition",
            "Premiere Pro",
            "After Effects",
            "Montage",
            "Tournage"
        ]
    },{
        title: "Resaweb",
        frontImage: "images/fast&serious.jpg",
        rightImage: "images/fast&serious2.jpg",
        year: "Mai 2023",
        price: "Dev",
        lien: "resaweb.html",
        details: [
            "Design",
            "HTML",
            "CSS",
            "Javascript",
            "PHP"
        ]
    },
    {
        title: "Podcast",
        frontImage: "images/zombie.jpg",
        rightImage: "images/zombie2.jpg",
        year: "Nov 2023",
        price: "Crea",
        lien: "podcast.html",
        details: [
            "Adobe audition",
            "Photoshop",
            "Son",
            "Analyse de visuels"
        ]
    },
    {
        title: "Journal de quartier",
        frontImage: "images/jq.png",
        rightImage: "images/jq2.png",
        year: "Nov 2022",
        price: "Crea",
        lien: "journal.html",
        details: [
            "Indesign",
            "Photoshop",
            "Mise en page",
            "Poids des images"
        ]
    },
    {
        title: "Dataviz",
        frontImage: "images/dataviz.png",
        rightImage: "images/dataviz2.png",
        year: "Nov 2023",
        price: "Dev",
        lien: "dataviz.html",
        details: [
            "HTML",
            "CSS",
            "Javascript",
            "JSON",
            "Design"
        ]
    },
    {
        title: "Refonte UX/UI",
        frontImage: "images/parcasterix.jpg",
        rightImage: "images/parcasterix2.jpg",
        year: "Avril 2023",
        price: "UX/UI",
        lien: "refonte.html",
        details: [
            "Figma",
            "Analyse d'une page web",
            "UX",
            "UI"
        ]
    },
    {
        title: "Projet citoyen",
        frontImage: "images/citoyen.png",
        rightImage: "images/citoyen2.png",
        year: "Mars 2023",
        price: "Crea",
        lien: "maraudes.html",
        details: [
            "Illustrator",
            "Photoshop",
            "Charte graphique",
            "Charte éditoriale",
            "Wordpress"
        ]
    }
];

const projectWrapper = document.getElementById("projectWrapper");

// Génération des cartes à partir des données des projets
projects.forEach((project) => {
    const card = document.createElement("a");
    card.classList.add("card");
    card.href = project.lien;

    const front = document.createElement("div");
    front.classList.add("front");

    const h3Front = document.createElement("h3");
    h3Front.textContent = project.title;

    const p1 = document.createElement("p");
    p1.textContent = `${project.year}`;
    
    const p2 = document.createElement("p");
    p2.classList.add("price");
    p2.textContent = project.price;

    front.appendChild(h3Front);
    front.appendChild(p1);
    front.appendChild(p2);

    const right = document.createElement("div");
    right.classList.add("right");

    const h3Right = document.createElement("h3");
    h3Right.textContent = project.title;

    const ul = document.createElement("ul");
    project.details.forEach((detail) => {
        const li = document.createElement("li");
        li.textContent = detail;
        ul.appendChild(li);
    });

    right.appendChild(h3Right);
    right.appendChild(ul);

    front.style.backgroundImage = `url(${project.frontImage})`;
    right.style.backgroundImage = `url(${project.rightImage})`;

    card.appendChild(front);
    card.appendChild(right);

    projectWrapper.appendChild(card);
});




// SLIDER SUTOUT PAS TOUCHER!!!!    IL MARCHEEEEE

document.addEventListener('DOMContentLoaded', function () {
    var sliderContainer = document.querySelector('.slider');
    var logoContainer = document.querySelector('.logo-container');
    var imageNames = ['Photoshop.png', 'css.png', 'html.png', 'Figma.svg', 'Lightroom.png', 'indesign.png', 'notion.png', 'libreoffice.png', 'WordPress.png', 'Premiere_Pro.png', 'vscode.png', 'PowerPoint.png', 'PHP.png', 'Excel.png', 'js.png', 'Illustrator.png', 'Audition.png', 'After_Effects.png'];
    var logoCount = imageNames.length;
    var cloneCount = 3; // Nombre de clones à afficher (réglable selon la taille souhaitée du défilement)
    var mobileLogoWidth = 100; // Largeur pour les écrans mobiles
    var logoWidth = 200; // Largeur pour les ordinateurs
    var logoMargin = 40; // Marge entre les logos

    function createLogo(imageName) {
        const logo = document.createElement('div');
        logo.classList.add('logo');
        logo.style.backgroundImage = `url('images/logo/${imageName}')`;
        logo.style.width = logoWidth + 'px';
        logo.style.marginRight = logoMargin + 'px'; // Espacement entre les logos
        logoContainer.appendChild(logo);
    }

    function updateLogoWidth() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth;
        logoContainer.innerHTML = ''; // Effacer les logos actuels

        logoWidth = screenWidth < 769 ? mobileLogoWidth : 200; // Ajuster la largeur du logo en fonction de l'écran

        for (let i = 0; i < cloneCount * logoCount; i++) {
            createLogo(imageNames[i % logoCount]); // Utilisation de l'opérateur modulo pour obtenir les index des logos à afficher
        }

        logoContainer.style.width = (logoWidth + logoMargin) * logoCount * cloneCount + 'px'; // Ajustement de la largeur du conteneur en fonction du nombre de logos
    }

    updateLogoWidth(); // Appel initial de la fonction
    window.addEventListener('resize', updateLogoWidth); // Gestion du redimensionnement de la fenêtre

    var currentIndex = 0;

    function showNextSlide() {
        currentIndex++;
        const newPosition = -currentIndex * (logoWidth + logoMargin) + 'px'; // Inclure la marge dans le calcul
        logoContainer.style.transition = 'transform 0.5s ease'; // Ajout d'une transition
    
        if (currentIndex >= logoCount) {
            setTimeout(function () {
                currentIndex = 0;
                logoContainer.style.transition = 'none';
                logoContainer.style.transform = 'translateX(' + (-(currentIndex * (logoWidth + logoMargin))) + 'px)'; // Réinitialisation à la position initiale
                void logoContainer.offsetWidth;
                logoContainer.style.transition = 'transform 0.5s ease';
            }, 500); // Retard pour donner l'illusion d'une transition en douceur
        }
    
        logoContainer.style.transform = 'translateX(' + newPosition + ')';
    }

    setInterval(showNextSlide, 2000); // Défilement automatique
});
//Fin slider



// A PROPOS
const text = document.querySelector('.text');
const image = document.querySelector(".moi");
const words = document.querySelectorAll(".word");
const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

if (isMobile) {
  // Écran plus petit que 768px : afficher les mots directement sans animation
  text.style.display = 'block';
  words.forEach((word) => {
    word.style.opacity = 1;
    word.style.transform = 'translateX(0)';
  });
} else {
  // Écran plus grand que 768px : ajouter l'animation au survol de l'image
  image.addEventListener("mouseover", () => {
    words.forEach((word, index) => {
      gsap.to(word, {
        opacity: 1,
        x: 0,
        duration: 0.5 * (index + 1),
        ease: "power4.out",
        delay: 0.1 * index,
      });
    });
    text.style.display = 'block';
  });

  image.addEventListener("mouseleave", () => {
    words.forEach((word, index) => {
      gsap.to(word, {
        opacity: 0,
        x: 20,
        duration: 0.1,
        ease: "power2.out",
        delay: 0.05 * (words.length - index),
      });
    });
    text.style.display = 'none';
  });
}








// Animation gsap

gsap.from(".ligneH1", { 
    duration: 3,
    opacity: 0,
    x: -900,
});

gsap.from(".ligneH2", { 
    duration: 3,
    opacity: 0,
    x: 900,
});

gsap.from(".ligneV3", { 
    duration: 3,
    opacity: 0,
    y: -500,
});

gsap.from(".ligneV4", { 
    duration: 3,
    opacity: 0,
    y: 500,
});

gsap.from(".ligneD1", { 
    duration: 3,
    opacity: 0,
    x: -900,
    y: -500,
});

gsap.from(".ligneD2", { 
    duration: 3,
    opacity: 0,
    x: 900,
    y: 500,
});

gsap.from(".ligneD3", { 
    duration: 3,
    opacity: 0,
    y: 500,
    x: -900,
});

gsap.from(".ligneD4", { 
    duration: 3,
    opacity: 0,
    y: -500,
    x: 500,
});

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

            h1.style.opacity = opacity; // Réduisez l'opacité du h1
            nav.style.opacity = opacity; // Réduisez l'opacité de la nav
            darkMode.style.opacity = 1; // Maintenez l'opacité du bouton de mode sombre à 1
            menu.style.opacity = 1; // Maintenez l'opacité du menu à 1

            if (opacity < 0) {
                nav.style.display = 'none'; // Cachez la nav
            } else {
                h1.style.display = 'block'; // Affichez le h1
                nav.style.display = 'block'; // Affichez la nav
            }
        } else {
            h1.style.opacity = 1; 
            nav.style.opacity = 1; 
            darkMode.style.opacity = 1; 
            menu.style.opacity = 

            nav.style.display = 'block';
        }
    });
});



// SLIDER SUTOUT PAS TOUCHER!!!!    IL MARCHEEEEE

document.addEventListener('DOMContentLoaded', function () {
    var sliderContainer = document.querySelector('.slider');
    var logoContainer = document.querySelector('.logo-container');

    var logoWidth = 200; // Ajustez selon la largeur de vos logos
    var cloneCount = 50; // Nombre de clones à ajouter

    var imageNames = ['Photoshop.png','css.png', 'html.png', 'Figma.svg', 'Lightroom.png', 'indesign.png', 'notion.png', 'libreoffice.png', 'WordPress.png', 'Premiere_Pro.png', 'vscode.png', 'PowerPoint.png', 'PHP.png', 'Excel.png','js.png', 'Illustrator.png', 'Audition.png', 'After_Effects.png'];

    // Ajoutez les logos à la fin pour créer une boucle infinie
    for (let i = 0; i < cloneCount; i++) {
        imageNames.forEach(function (imageName) {
            const logo = document.createElement('div');
            logo.classList.add('logo');
            logo.style.backgroundImage = `url('images/logo/${imageName}')`;
            logo.style.width = logoWidth + 'px';
            logoContainer.appendChild(logo);
        });
    }

    var currentIndex = 0;
    var intervalId;

    function showNextSlide() {
        currentIndex++;
        const newPosition = -currentIndex * logoWidth + 'px';
        logoContainer.style.transform = 'translateX(' + newPosition + ')';

        // Si nous avons atteint la fin des logos, revenons à la position initiale sans transition
        if (currentIndex >= (imageNames.length + 1) * cloneCount) {
            currentIndex = 0;
            logoContainer.style.transition = 'none';
            logoContainer.style.transform = 'translateX(' + -(currentIndex * logoWidth) + 'px)';
            void logoContainer.offsetWidth;
            logoContainer.style.transition = 'transform 0.5s ease';
        }
    }

    // Change de diapositive toutes les 3 secondes 
    intervalId = setInterval(showNextSlide, 2000);

    // Arrêtez le slider lorsque la souris survole la zone du slider (facultatif)
    sliderContainer.addEventListener('mouseenter', function () {
        clearInterval(intervalId);
    });

    // Redémarrez le slider lorsque la souris quitte la zone du slider (facultatif)
    sliderContainer.addEventListener('mouseleave', function () {
        intervalId = setInterval(showNextSlide, 2000);
    });
});


//Fin slider







// Données des projets 
const projects = [
    {
        title: "Resaweb",
        frontImage: "images/fast&serious.png",
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
        frontImage: "images/zombie.png",
        rightImage: "images/zombie2.png",
        year: "Nov 2023",
        price: "Crea",
        lien: "podcast.html",
        details: [
            "Adobe audition",
            "Photoshop",
            "Son",
            ""
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
            "Poids des images",
            ""
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
        frontImage: "images/parcasterix.png",
        rightImage: "images/parcasterix2.png",
        year: "Avril 2023",
        price: "UX/UI",
        lien: "refonte.html",
        details: [
            "Figma",
            "Analyse",
            "UX",
            "UI",
            ""
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
            ""
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



// A PROPOS
const container = document.querySelector('.container');
const text = document.querySelector('.text');

container.addEventListener('mouseover', () => {
    text.style.display = 'block';
});

container.addEventListener('mouseleave', () => {
    text.style.display = 'none';
});




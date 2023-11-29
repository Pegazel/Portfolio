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

//     // Sélectionnez l'en-tête
// const header = document.querySelector('nav');

// // Ajoutez un gestionnaire d'événements de défilement
// window.addEventListener('scroll', () => {
//     // Obtenez la position actuelle de défilement
//     const scrollPosition = window.scrollY;
    
//     // Calculez l'opacité en fonction de la position de défilement
//     const opacity = 1 - scrollPosition / 200; // Vous pouvez ajuster le nombre pour contrôler le moment où l'en-tête commence à disparaître
    
//     // Appliquez l'opacité à l'en-tête
//     header.style.opacity = opacity;
// });

// Sélectionnez l'en-tête
const header = document.querySelector('header');

// Sélectionnez le menu et le bouton pour le mode sombre
const menu = document.querySelector('.menu');
const darkMode = document.querySelector('.dark-mode-toggle');

// Ajoutez un gestionnaire d'événements de défilement
window.addEventListener('scroll', () => {
    // Obtenez la position actuelle de défilement
    const scrollPosition = window.scrollY;

    // Calculez l'opacité en fonction de la position de défilement
    const opacity = 1 - scrollPosition / 200; // Vous pouvez ajuster le nombre pour contrôler le moment où l'en-tête commence à disparaître

    // Appliquez l'opacité à l'en-tête (sauf le menu et le bouton)
    header.style.opacity = opacity;

    // Appliquez l'opacité au menu et au bouton pour le mode sombre
    menu.style.opacity = opacity;
    darkMode.style.opacity = opacity;
});

// Appliquez une opacité initiale aux éléments
menu.style.opacity = 1;
darkMode.style.opacity = 1;






});







// Données des projets 
const projects = [
    {
        title: "Resaweb",
        frontImage: "images/fast&serious.png",
        rightImage: "images/fast&serious2.jpg",
        year: "Mai 2023",
        price: "Dev",
        details: [
            "Width 7.7\"",
            "Length 31.75\"",
            "Wheelbase 14\"",
            "Nose 6.875\"",
            "Tail 6.25\""
        ]
    },
    {
        title: "Persona",
        frontImage: "images/persona.png",
        rightImage: "images/persona2.png",
        year: "Mars 2023",
        price: "UX/UI",
        details: [
            "Width 7.7\"",
            "Length 31.75\"",
            "Wheelbase 14\"",
            "Nose 6.875\"",
            "Tail 6.25\""
        ]
    },
    {
        title: "Journal de quartier",
        frontImage: "images/jq.png",
        rightImage: "images/jq2.png",
        year: "Nov 2022",
        price: "Crea",
        details: [
            "Width 7.7\"",
            "Length 31.75\"",
            "Wheelbase 14\"",
            "Nose 6.875\"",
            "Tail 6.25\""
        ]
    },
    {
        title: "Dataviz",
        frontImage: "images/dataviz.png",
        rightImage: "images/dataviz2.png",
        year: "Nov 2023",
        price: "Dev",
        details: [
            "Width 7.7\"",
            "Length 31.75\"",
            "Wheelbase 14\"",
            "Nose 6.875\"",
            "Tail 6.25\""
        ]
    },
    {
        title: "Refonte UX/UI",
        frontImage: "images/parcasterix.png",
        rightImage: "images/parcasterix2.png",
        year: "Avril 2023",
        price: "UX/UI",
        details: [
            "Width 7.7\"",
            "Length 31.75\"",
            "Wheelbase 14\"",
            "Nose 6.875\"",
            "Tail 6.25\""
        ]
    },
    {
        title: "Projet citoyen",
        frontImage: "images/citoyen.png",
        rightImage: "images/citoyen2.png",
        year: "Mars 2023",
        price: "Crea",
        details: [
            "Width 7.7\"",
            "Length 31.75\"",
            "Wheelbase 14\"",
            "Nose 6.875\"",
            "Tail 6.25\""
        ]
    }
    
];

const projectWrapper = document.getElementById("projectWrapper");

// Génération des cartes à partir des données des projets
projects.forEach((project) => {
    const card = document.createElement("a");
    card.classList.add("card");
    card.href = "#";

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


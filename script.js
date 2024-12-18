// le variable compteur permet d'initier le decompte 
let compteur = 0;

// la variable panier permet de selectionner l'identifiant de la balise sup
const panier = document.getElementById('panier');

// les deux variables commander et annuler permet de selectionner
// tous les bouttons ayant les memes class a savoir bouttonCommande et bouttonAnnuler
const commander = document.querySelectorAll('.bouttonCommande');
const annuler = document.querySelectorAll('.bouttonAnnuler');

// ici querySelectorAll signifie Séléctionner tous 


// nous allons ajouter un evenement sur la variable commander lors d'un click 
commander.forEach(button => {
    button.addEventListener('click', () => {
        compteur++; 
        panier.textContent = compteur;
    });
});

// nous allons ajouter un evenement sur la variable annuler lors d'un click 
annuler.forEach(button => {
    button.addEventListener('click', () => {
        if (compteur > 0) {
            compteur--;
            panier.textContent = compteur;
        }
    });
});

// remarque : le mot forEach signifie pour chaque 

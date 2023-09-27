

function affichage(){

}

function tirage(){          //Fonction servant au tirage des couleurs 

    /*
        COULEURS :
            Rouge - R = 0
            Orange - O = 1
            Marron - M = 2
            Bleu - B = 3
            Vert - V = 4
            Jaune - j = 5  

        La fonction Math.random() sera utilisé pour obtenir le tirage aléatoire
    */


    let SuiteCouleurNB = []        //Déclaration du tableau contenant les couleurs sosu forme de nombre
    let SuiteCouleurLettre = []


    for(let i=0; i<5; i++){             //Boucle servant a l'affectation des 5 couleurs
        SuiteCouleurNB.push(Math.floor(Math.random() * 6))          //Gérération des couleurs suivant le tableau en tête de la fonction + affectation dans l'array
        // Math.floor(Math.random() * 6) -> ici math.floor permet d'arrondir a l'unité, maths.random() genère un nombre entre 0 et 1, *6 pour obtenir un nombre entre 0 et 6
    }

    SuiteCouleurNB.forEach((nombre) => {            //Boucle permettant la conversion des chiffres en lettre (plus facile a comprendre pour la suite)
        if (nombre == 0) {
            SuiteCouleurLettre.push("R");
        }
        if (nombre == 1) {
            SuiteCouleurLettre.push("O");
        }
        if (nombre == 2) {
            SuiteCouleurLettre.push("M");
        }
        if (nombre == 3) {
            SuiteCouleurLettre.push("B");
        }
        if (nombre == 4) {
            SuiteCouleurLettre.push("V");
        }
        if (nombre == 5) {
            SuiteCouleurLettre.push("J");
        }
    });

    return SuiteCouleurNB;
}

function rejouer(){

}

function resultat(){

}
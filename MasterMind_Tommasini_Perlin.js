const SuiteCouleurLettre = []

function SentInput(indexID){
    let input_id = ("Text"+toString(indexID))
    let CouleurUtilisateurInput = document.getElementById(input_id).value;
    let TabCouleurUtilisateurInput;
    for(let i=0; i<CouleurUtilisateurInput.length;i++){
        TabCouleurUtilisateurInput[i].push(TabCouleurUtilisateurInput.substr(i,i+1))
    }

    affichage(TabCouleurUtilisateurInput,indexID)
    resultat(TabCouleurUtilisateurInput, indexID);
}

function affichage(TabCouleurUtilisateurInput,indexID){
    
    const rondContainer = document.getElementById('rondContainer');

    let stylecolor = [];

    TabCouleurUtilisateurInput.forEach(col => {                   //
        if(col == 'R'){
            stylecolor.push('red')
        }
        if(col == 'O'){
            stylecolor.push('orange')
        }
        if(col == 'J'){
            stylecolor.push('yellow')
        }
        if(col == 'M'){
            stylecolor.push('brown')
        }
        if(col == 'B'){
            stylecolor.push('blue')
        }
        if(col == 'V'){
            stylecolor.push('green')
        }
    });

    let return_id = ("Affichage"+toString(indexID))
        

    for (const color of stylecolor) {
        const rond = document.getElementById(return_id);
        rond.classList.add('circle');
        rond.style.backgroundColor = color;
        rondContainer.appendChild(rond);
    }
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


            //Déclaration du tableau contenant les couleurs sosu forme de nombre
    let SuiteCouleurNB = []


    for(let i=0; i<4; i++){             //Boucle servant a l'affectation des 5 couleurs
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
    console.log()
}

function rejouer(){
    const rondContainer = document.getElementById('rondContainer');
    rondContainer.innerHTML = '';

    tirage();

}

function jouer(){
    tirage();
}



function resultat(TabCouleurUtilisateurInput, indexID){

    let TabCouleurTirage = SuiteCouleurLettre;
    let TabCouleurUtilisateur = []

    for(let i=0; i<TabCouleurUtilisateurInput.length; i++){             //Boucle sur le nombre de caraactère
        TabCouleurUtilisateur.push(TabCouleurUtilisateurInput[i].toUpperCase())         //Correction lowercase ==> passage de minuscule a majuscule
    }                                                                               
    


    let TabCouleurResultats = []

    TabCouleurTirage.forEach((couleur, i) => {
        if(TabCouleurUtilisateur[i] == couleur){
            TabCouleurResultats[i]="black"
        }
        else if((TabCouleurUtilisateur[0] == couleur)||(TabCouleurUtilisateur[1] == couleur)||(TabCouleurUtilisateur[2] == couleur)||(TabCouleurUtilisateur[3] == couleur)){
            TabCouleurResultats[i]="grey"
        }
        else if((TabCouleurUtilisateur[0] !== couleur )&&(TabCouleurUtilisateur[1] !== couleur )&&(TabCouleurUtilisateur[2] !== couleur )&&(TabCouleurUtilisateur[3] !== couleur )){
            TabCouleurResultats[i]="white"
        }
        
    });

    
    let return_id = ("Resultat"+toString(indexID))
    const rondContainer = document.getElementById('rondContainer');

    for(let i =0; i<TabCouleurResultats.length;i++){
        const rond = document.getElementById(return_id);
        rond.classList.add('circle');
        rond.style.backgroundColor = TabCouleurResultats[i];
        rondContainer.appendChild(rond);
    }
}

const SuiteCouleurLettre = [];
var score = 0;


function SentInput(indexID){
    let str_indexID = indexID.toString()
    let input_id = ("Text"+str_indexID)
    let CouleurUtilisateurInput = document.getElementById(input_id).value;
    let TabCouleurUtilisateurInput = [];
    for(let i=0; i<CouleurUtilisateurInput.length;i++){
        TabCouleurUtilisateurInput.push(CouleurUtilisateurInput.substring(i,i+1))
    }

    let TabCouleurUtilisateurInputUpperCase = [];
    for(let i=0; i<TabCouleurUtilisateurInput.length; i++){             //Boucle sur le nombre de caractère
        TabCouleurUtilisateurInputUpperCase.push(TabCouleurUtilisateurInput[i].toUpperCase())         //Correction lowercase ==> passage de minuscule a majuscule
    }    

    affichage(TabCouleurUtilisateurInputUpperCase,indexID)
    resultat(TabCouleurUtilisateurInputUpperCase, indexID);
}

function affichage(TabCouleurUtilisateurInput,indexID){

    // console.log(TabCouleurUtilisateurInput)
    // console.log(indexID)

    let stylecolor = [];

    for(let i=0; i<TabCouleurUtilisateurInput.length;i++){
        if(TabCouleurUtilisateurInput[i] == 'R'){
            stylecolor.push('red')
        }
        else if(TabCouleurUtilisateurInput[i] == 'O'){
            stylecolor.push('orange')
        }
        else if(TabCouleurUtilisateurInput[i] == 'J'){
            stylecolor.push('yellow')
        }
        else if(TabCouleurUtilisateurInput[i] == 'M'){
            stylecolor.push('brown')
        }
        else if(TabCouleurUtilisateurInput[i] == 'B'){
            stylecolor.push('blue')
        }
        else if(TabCouleurUtilisateurInput[i] == 'V'){
            stylecolor.push('green')
        }
        else{
            stylecolor.push('black')
        }
    }
    
    let str_indexID = indexID.toString()
    let return_id_notfull = ("Affichage"+str_indexID)

    for (let i = 0; i< stylecolor.length; i++) {
        let temp = i.toString()
        let return_id_full = (return_id_notfull+"_"+temp)
        const rond = document.getElementById(return_id_full);
        rond.style.backgroundColor = stylecolor[i];
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

    console.log(SuiteCouleurLettre)
}

function rejouer(){

    SuiteCouleurLettre.splice(0,4);

    tirage();
    for(let i=1; i<10; i++){
        for(let j=0; j<4; j++){
            var str_indexID = i.toString()
            var str_precisionID = j.toString()

            let ResultatID = ("Resultat"+str_indexID+"_"+str_precisionID)
            let AffichageID = ("Affichage"+str_indexID+"_"+str_precisionID)

            document.getElementById(ResultatID).style.backgroundColor = "grey";
            document.getElementById(AffichageID).style.backgroundColor = "grey";

            // rondresultat;
            // rondaffichage;

            let input_id = ("Text"+str_indexID)
            document.getElementById(input_id).value = "";
        }
    }
}


function resultat(TabCouleurUtilisateurInput, indexID){

    let TabCouleurTirage = SuiteCouleurLettre;
    let TabCouleurResultats = []
    let Counter = 0;

    for(let i =0; i<TabCouleurUtilisateurInput.length;i++){
        if(TabCouleurUtilisateurInput[i]==TabCouleurTirage[i]){
            TabCouleurResultats.push("black")
            Counter+=1;
        }
        else{
            let ValueVerif = 0;
            for (let v = 0; v < TabCouleurTirage.length; v++) {
                if (TabCouleurUtilisateurInput[i] === TabCouleurTirage[v]) {
                    ValueVerif +=1
                }
            }
            if(ValueVerif>=1){
                TabCouleurResultats.push("grey")
            }else{
                TabCouleurResultats.push("white")
            }
        }
    }
    
    let str_indexID = indexID.toString()
    let return_id_notfull = ("Resultat"+str_indexID)

    for (let i = 0; i< TabCouleurResultats.length; i++) {
        let tempo = i.toString()
        let return_id_full = (return_id_notfull+"_"+tempo)
        const rond = document.getElementById(return_id_full);
        rond.style.backgroundColor = TabCouleurResultats[i];
    }
    
    if(Counter==4){
        alerteVictoire();
        score+=1;
    }

    document.getElementById("Score").innerHTML= score;

}

function alerteVictoire(){
    alert("Vous avez gagné, pour rejouer cliquez sur ''Commencer une partie''");
}

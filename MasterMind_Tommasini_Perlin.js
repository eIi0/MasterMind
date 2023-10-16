/*
        COULEURS normalisées :
            Rouge - R 
            Orange - O 
            Marron - M 
            Bleu - B 
            Vert - V
            Jaune - j 
*/

const SuiteCouleurLettre = [];
var score = 0;


function SentInput(indexID){                //La fonction sendInput sert a la récupération des couleurs et l'appel aux fonctions

    let str_indexID = indexID.toString()        //Conversion de type de la variable index (int to str)
    let input_id = ("Text"+str_indexID)                 //création du string relatif a l'id de l'input HTML des couleurs 
    let CouleurUtilisateurInput = document.getElementById(input_id).value;      // recupération des couleurs

    //decomposition des couleurs renseignés par l'utilisateur, elle passe de string "abcd" a un array ["a"],["b"],["c"],["d"]
    let TabCouleurUtilisateurInput = [];        
    for(let i=0; i<CouleurUtilisateurInput.length;i++){                         //boucle sur la longueur de l'input (en principe toujours égale a 4)
        TabCouleurUtilisateurInput.push(CouleurUtilisateurInput.substring(i,i+1))               //décomposition du string CouleurUtilisateurInput caractère par caractère,
    }                                                                                           //afin d'être ajouté a l'array TabCouleurUtilisateurInput

    //correction des minuscules.
    //Pour la suite du code nous utiliserons des caractères normalisés en majuscule, si l'user a rentré des caractères en minuscule, il faut les convertir
    let TabCouleurUtilisateurInputUpperCase = [];       
    for(let i=0; i<TabCouleurUtilisateurInput.length; i++){             //Boucle sur le nombre de caractère
        TabCouleurUtilisateurInputUpperCase.push(TabCouleurUtilisateurInput[i].toUpperCase())         //Correction lowercase to uppercase ==> passage de minuscule a majuscule
    }    

    affichage(TabCouleurUtilisateurInputUpperCase,indexID);         //appel de la fonction affichage
    resultat(TabCouleurUtilisateurInputUpperCase, indexID);         //appel de la fonction resultat
}

function affichage(TabCouleurUtilisateurInput,indexID){         //fonction servant a l'affichage des couleurs rentrées par l'user
    
    let stylecolor = [];            //création de l'array servant a stocker les valeurs de couleurs, ce tableau sera réutilisé pour l'affichage html
    for(let i=0; i<TabCouleurUtilisateurInput.length;i++){      //boucle sur la longueur de l'input user

        if(TabCouleurUtilisateurInput[i] == 'R'){          // si la couleur est rouge "R", on ajoute "red" a l'array stylecolor
            stylecolor.push('red')
        }
        else if(TabCouleurUtilisateurInput[i] == 'O'){          // si la couleur est orange "O", on ajoute "orange" a l'array stylecolor
            stylecolor.push('orange')
        }
        else if(TabCouleurUtilisateurInput[i] == 'J'){          // si la couleur est jaune "J", on ajoute "yellow" a l'array stylecolor
            stylecolor.push('yellow')
        }
        else if(TabCouleurUtilisateurInput[i] == 'M'){          // si la couleur est marron "M", on ajoute "brown" a l'array stylecolor
            stylecolor.push('brown')
        }
        else if(TabCouleurUtilisateurInput[i] == 'B'){          // si la couleur est bleu "B", on ajoute "blue" a l'array stylecolor
            stylecolor.push('blue')
        }
        else if(TabCouleurUtilisateurInput[i] == 'V'){          // si la couleur est vert "V", on ajoute "green" a l'array stylecolor
            stylecolor.push('green')
        }
        else{                                   //si le caractère renseigné n'est pas un de ceux précisé plus haut, la couleur affichée sera noir
            stylecolor.push('black')            //donc on ajoute "black" a l'array stylecolor
        }
    }
    
    let str_indexID = indexID.toString()                        //Conversion de type de la variable index (int to str)
    let return_id_notfull = ("Affichage"+str_indexID)           //création du string (non complet) relatif a l'id de la div HTML affichant la couleur, AffichageX

    for (let i = 0; i< stylecolor.length; i++) {                //boucle sur la longueur de l'input (en principe toujours égale a 4)
        let index_str = i.toString()                                //conversion de l'index en string
        let return_id_full = (return_id_notfull+"_"+index_str)      //création du string (complet) relatif a l'id de la div HTML affichant la couleur, AffichageX_Y
        const rond = document.getElementById(return_id_full);       //variable contenant les informations HTML des ronds affichant les couleurs renseignés par l'user
        rond.style.backgroundColor = stylecolor[i];                 //modification de la couleur du rond, en utilisant la couleur renseigné dans stylecolor (index adapté)
    }
}

function tirage(){          //Fonction servant au tirage des couleurs 

    //La fonction Math.random() sera utilisé pour obtenir le tirage aléatoire
       
    let SuiteCouleurNB = []                 //Déclaration du tableau contenant les couleurs sosu forme de nombre

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

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

        //Dans la 1ere version du mastermind, le clic sur le bouton affichait le resultat et les couleurs renseignés dans l'input. Nous avions donc créer la
        //fonction SentInput pour faire le traitement une fois et ensuite appeler les fonctions Affichage et Resultat.
        //Dans cette version ce n'est plus le cas, la fonction SentInput n'appelle plus que la fonction Resultat, le traitement qu'elle effectue aurait pu se faire dans
        //la fonction resultat directement, mais vu que ça fonctionnait on n'a pas changé ;)

function SentInput(indexID){                //La fonction sendInput sert a la récupération des couleurs et l'appel a la fonction

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

    resultat(TabCouleurUtilisateurInputUpperCase, indexID);         //appel de la fonction resultat
}


function affichage(CouleurUtilisateurInput,indexID){         //fonction servant a l'affichage des couleurs rentrées par l'user

    //Jusqu'a la ligne 56, c'est le même code que dans la fonction SentInput, qui sert au traitement des donnés d'entrée
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

    
    let stylecolor = [];            //création de l'array servant a stocker les valeurs de couleurs, ce tableau sera réutilisé pour l'affichage html
    for(let i=0; i<TabCouleurUtilisateurInputUpperCase.length;i++){      //boucle sur la longueur de l'input user

        if(TabCouleurUtilisateurInputUpperCase[i] == 'R'){          // si la couleur est rouge "R", on ajoute "red" a l'array stylecolor
            stylecolor.push('red')
        }
        else if(TabCouleurUtilisateurInputUpperCase[i] == 'O'){          // si la couleur est orange "O", on ajoute "orange" a l'array stylecolor
            stylecolor.push('orange')
        }
        else if(TabCouleurUtilisateurInputUpperCase[i] == 'J'){          // si la couleur est jaune "J", on ajoute "yellow" a l'array stylecolor
            stylecolor.push('yellow')
        }
        else if(TabCouleurUtilisateurInputUpperCase[i] == 'M'){          // si la couleur est marron "M", on ajoute "brown" a l'array stylecolor
            stylecolor.push('brown')
        }
        else if(TabCouleurUtilisateurInputUpperCase[i] == 'B'){          // si la couleur est bleu "B", on ajoute "blue" a l'array stylecolor
            stylecolor.push('blue')
        }
        else if(TabCouleurUtilisateurInputUpperCase[i] == 'V'){          // si la couleur est vert "V", on ajoute "green" a l'array stylecolor
            stylecolor.push('green')
        }
        else{                                   //si le caractère renseigné n'est pas un de ceux précisé plus haut, la couleur affichée sera noir
            stylecolor.push('black')            //donc on ajoute "black" a l'array stylecolor
        }
    }
    
    let str_indexID = indexID.toString()                        //Conversion de type de la variable index (int to str)
    let return_id_notfull = ("Affichage"+str_indexID)           //création du string (non complet) relatif a l'id de la div HTML affichant la couleur, AffichageX

        // boucle servant a la modification des couleurs sur la page HTML
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

     //SuiteCouleurLettre est un tableau / array global défini en tête du fichier
    SuiteCouleurNB.forEach((nombre) => {            //Boucle permettant la conversion des chiffres en lettre (plus facile a comprendre pour la suite)
        if (nombre == 0) {                          //les lettres en majuscule choisit sont ceux des couleurs normalisés
            SuiteCouleurLettre.push("R");           //ajout a l'array SuiteCouleurLettre de la couleur rouge sous sa forme normalisée
        }
        if (nombre == 1) {
            SuiteCouleurLettre.push("O");          //ajout a l'array SuiteCouleurLettre de la couleur orange sous sa forme normalisée
        }
        if (nombre == 2) {
            SuiteCouleurLettre.push("M");       //ajout a l'array SuiteCouleurLettre de la couleur marron sous sa forme normalisée
        }
        if (nombre == 3) {
            SuiteCouleurLettre.push("B");           //ajout a l'array SuiteCouleurLettre de la couleur bleu sous sa forme normalisée
        }
        if (nombre == 4) {
            SuiteCouleurLettre.push("V");           //ajout a l'array SuiteCouleurLettre de la couleur vert sous sa forme normalisée
        }
        if (nombre == 5) {
            SuiteCouleurLettre.push("J");           //ajout a l'array SuiteCouleurLettre de la couleur jaune sous sa forme normalisée
        }
    });

}

function rejouer(){             //Fontion servant a rejouer et remettre " a neuf" " le fichier HTML

    SuiteCouleurLettre.splice(0,4);         //suppression des 4 caractères de l'array global servant a la mémorisation des coulmeurs tirées
    tirage();                       //nouveau tirage


        // Les ids des ronds servant a l'affichage sont Resultati_j et Affichagei_j avec i et j, 2 variables (0< i <10 et 0<=j <4)
        //Il faut donc 'enlever' la couleurs de ces ronds (les remettre a gris), nous ferons 2 boucles imbriquées pour incrémenter nos variables.
        //Il faut aussi supprimer les textes renseignés par l'utilisateur

    for(let i=1; i<10; i++){                //boucle i avec 9 passages
        for(let j=0; j<4; j++){                 //boucle j avec 4 passages
            var str_indexID = i.toString()          //conversion en str de l'index i
            var str_precisionID = j.toString()          //conversion en str de l'index j

            let ResultatID = ("Resultat"+str_indexID+"_"+str_precisionID)       //création du str de l'id du ronds resultat
            let AffichageID = ("Affichage"+str_indexID+"_"+str_precisionID)       //création du str de l'id du ronds affichage

            document.getElementById(ResultatID).style.backgroundColor = "grey";     //couelur mise a gris
            document.getElementById(AffichageID).style.backgroundColor = "grey";    // couleur mise a gris

            let input_id = ("Text"+str_indexID)                 //création du str de l'id du l'input
            document.getElementById(input_id).value = "";           //suppression du texte dans le champ input
        }
    }
}

            // fonction resultat servant a vérifier si l'input rentré est indentique au tirage
function resultat(TabCouleurUtilisateurInput, indexID){

    let TabCouleurTirage = SuiteCouleurLettre;      //copie de l'array contenant la suite de couleur du tirage
    let TabCouleurResultats = []        //initialisation du tableau qui contiendra les couleurs du resultat
    let Counter = 0;            //compteur de réponse juste

    for(let i =0; i<TabCouleurUtilisateurInput.length;i++){             ///boucle sur la longueur de l'input (en principe toujours égale a 4) 
        if(TabCouleurUtilisateurInput[i]==TabCouleurTirage[i]){         //si la valeur de l'input est celle du tirage 
            TabCouleurResultats.push("black")                       //ajout dans le tableau TabCouleurResultats de de la couleur noir 
            Counter+=1;                                             //compteur réponse juste +1
        }
        else{                                                      //si la valeur de l'input n'est pas celle du tirage 
            let ValueVerif = 0;                              //variable temporaire permettant de vérifier si la couleur renseigné est a une autre position dans le tirage
            for (let v = 0; v < TabCouleurTirage.length; v++) {             //boucle imbriquée de longueur du tirage permettant de rebouclé dans le tableau tirage
                if (TabCouleurUtilisateurInput[i] === TabCouleurTirage[v]) {        //si la couleur TabCouleurUtilisateurInput est identique a une couleur du tableau tirage
                    ValueVerif +=1                                                  //la variable de vérification +1
                }
            }
            if(ValueVerif>=1){                                  //si la variable de vérification > 1 ( ce qui signifie que la couleur est dans le tirage)
                TabCouleurResultats.push("grey");               //la couleur grise est ajouté dans le tableau TabCouleurResultats
            }else{                                              // sinon (ce qui signifie que la oculeur rentrée par l'user n'est pas dans le tirage)
                TabCouleurResultats.push("white");                 ////la couleur blanche est ajouté dans le tableau TabCouleurResultats
            }
        }
    }
    
    let str_indexID = indexID.toString()                        //conversion de type
    let return_id_notfull = ("Resultat"+str_indexID)                //création non complet du string relatif a l'id des ronds affichant le resultat , AffichageX

            //boucle servant a la modification de la couleur sur la page html
    for (let i = 0; i< TabCouleurResultats.length; i++) {           //boucle sur la longueur de l'input (en principe toujours égale a 4)
        let index_str = i.toString()                                    //conversion de l'index en string
        let return_id_full = (return_id_notfull+"_"+index_str)          //création du string (complet) relatif a l'id de la div HTML affichant le resultat, AffichageX_Y
        const rond = document.getElementById(return_id_full);           //variable contenant les informations HTML des ronds affichant le resultat
        rond.style.backgroundColor = TabCouleurResultats[i];            //modification de la couleur du rond, en utilisant la couleur renseigné dans TabCouleurResultats (index adapté)
    }
    
    if(Counter==4){                 //si le compteur de réponse juste est = a 4, les 4 caractères renseignés sont identique au tirage, c'est une vistoire
        alerteVictoire();               //appel de la fonction d'alert victoire
        score+=1;                       //score s'incrémente de 1
    }

    document.getElementById("Score").innerHTML= score;   // actualisation de l'affichage du score

}

function alerteVictoire(){          //fonction appelé en cas de victoire
    alert("Vous avez gagné, pour rejouer cliquez sur ''Commencer une partie''");        //popup de victoire avec son petit texte
}


for (let i = 1; i <= 9; i++) {          //boucle s'executant 9 fois (car 9 inputs)
    const inputElement = document.getElementById("Text" + i);       //création du string d'id des inputs

    inputElement.addEventListener("input", function (event) {       //une détéction se faire a chaque event (ecriture dans l'input) ce qui execute les lignes écrites juste dessous
        const inputValue = event.target.value;              //recupère la valeur de l'input lorsqu'un caractère (qui représente une couleur) est ajouté
        affichage(inputValue, i)        //appel de la fonction affichage avec 2 arguments, le string récupérer de l'input et l'index d'input a laquel il a été péché4
    });
}
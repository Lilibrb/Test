let personnage = [
    {
    nom: "Thor", //string
    image: "Thor3.jpeg",
    arme: "Mjollnir", //string
    espece: "Asgardien", //string
    vivant: true, //boolean
    taille: 197 + "cm", //string
    poids: 295 + "kg", //string
    famille:[{ //objet
        pere: "Odin",
        mere: "Frigga",
        amis: "Loki",
    }],
    profession: ["Guerrier", "Dieu",] //tableau
},
{
    nom: "Tony Stark", //string
    image: "Ironman2.jpeg",
    arme: "Armure Iron Man", //string
    espece: "Humain", //string
    vivant: false, //boolean
    taille: 191 + "cm", //string
    poids: 102 + "kg", //string
    famille: [
        { //objet
        pere: "Howard Stark",
        mere: "Maria Stark",
        amis: "Nick Fury",
    }]
    ,
    profession: ["Ingénieur", "Inventeur",] //tableau
},

]
;



function creerCartes(){

    personnage.forEach(element => {

        let newCard = document.createElement("div");
        newCard.classList.add("carte");

        let newCard2 = document.createElement("div");
        newCard2.classList.add("details");

        let cardTitle = document.createElement("div");
        cardTitle.classList.add("titreCarte");

        let cardPicture = document.createElement("img");
        cardPicture.src = element.image;

        let cardName = document.createElement("h1");
        cardName.innerHTML = element.nom;

        cardTitle.appendChild(cardPicture);
        cardTitle.appendChild(cardName);

        let cardWork = document.createElement("div");
        let cardWorkName = document.createElement("h1");
        cardWorkName.innerHTML = "Professions";

        let cardWorkList = document.createElement("p")
        cardWorkList.innerHTML = element.profession[0] + " , " + element.profession[1];



        cardWork.appendChild(cardWorkName);
        cardWork.appendChild(cardWorkList);

        let cardArme = document.createElement("div");
        let cardArmeTitle = document.createElement("h1");
        cardArmeTitle.innerHTML = "Arme";

        let cardArmeObjet = document.createElement("p");
        cardArmeObjet.innerHTML = element.arme; 

        cardArme.appendChild(cardArmeTitle);
        cardArme.appendChild(cardArmeObjet);

        //div especes//
        let cardEspece = document.createElement("div");
        let cardEspeceTitle = document.createElement("h1");
        cardEspeceTitle.innerHTML = "Espèce";

        let cardEspeceObjet = document.createElement("p");
        cardEspeceObjet.innerHTML = element.espece;

        cardEspece.appendChild(cardEspeceTitle);
        cardEspece.appendChild(cardEspeceObjet);

        //div statut vital//

        let cardHealthState = document.createElement("div");
        let cardHealthStateTitle = document.createElement("h1");
        cardHealthStateTitle.innerHTML = "Vivant";

        let cardHealthStateContent = document.createElement("p");

        if(element.vivant == true ){

            cardHealthStateContent.innerHTML = "Oui";

        }
        else if(element.vivant === false)
        {
            cardHealthStateContent.innerHTML = "Non";
        }

        cardHealthState.appendChild(cardHealthStateTitle);
        cardHealthState.appendChild(cardHealthStateContent);


        //div taille //
        let cardTaille = document.createElement("div");
        let cardTailleTitle = document.createElement("h1");
        cardTailleTitle.innerHTML = "Taille";

        let cardTailleObjet = document.createElement("p");
        cardTailleObjet.innerHTML = element.taille;

        cardTaille.appendChild(cardTailleTitle);
        cardTaille.appendChild(cardTailleObjet);

        //div poids//
        let cardPoids = document.createElement("div");
        let cardPoidsTitle = document.createElement("h1");
        cardPoidsTitle.innerHTML = "Poids";

        let cardPoidsObjet = document.createElement("p");
        cardPoidsObjet.innerHTML = element.poids;

        cardPoids.appendChild(cardPoidsTitle);
        cardPoids.appendChild(cardPoidsObjet);

        //div famille//

        let cardFamily = document.createElement("div");

        let cardFamilyTitle = document.createElement("h1");
        cardFamilyTitle.innerHTML = "Famille";

        let CardFamilyList = document.createElement("ul");

        for(let i = 0; i < element.famille.length ; i+=1)
        {
            let cardParent1 = document.createElement("li");
            cardParent1.innerHTML = "Père : " + element.famille[i].pere;
            let cardParent2 = document.createElement("li");
            cardParent2.innerHTML = "Mère : " + element.famille[i].mere;
            let cardParent3 = document.createElement("li");
            cardParent3.innerHTML = "Ami : " + element.famille[i].amis;
            
            
            CardFamilyList.appendChild(cardParent1);
            CardFamilyList.appendChild(cardParent2);
            CardFamilyList.appendChild(cardParent3);

        }

        cardFamily.appendChild(cardFamilyTitle);
        cardFamily.appendChild(CardFamilyList);
        


        newCard2.appendChild(cardTitle);
        newCard2.appendChild(cardWork);
        newCard2.appendChild(cardArme);
        newCard2.appendChild(cardEspece);
        newCard2.appendChild(cardHealthState);
        newCard2.appendChild(cardTaille);
        newCard2.appendChild(cardPoids);
        newCard2.appendChild(cardFamily);


        newCard.appendChild(newCard2);

        document.body.appendChild(newCard);

        console.log(cardName);

        
    });
}

creerCartes();


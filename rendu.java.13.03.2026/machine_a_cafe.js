/* 
la fonction afficherÉtat qui permet d'indiquer la quantité d'eau et de café restante dans la machine et l'argent gagné au total.
*/


function afficheretat(eaurestante, caferestant, argentgagné) {
    console.log("eau restant" + eaurestante + "ml",
        "cafe restant" + caferestant + "g",
        "argent gagné" + argentgagné + "€");
}

//définition des quantités initiale d'eau, de café et le prix d'un café.Dans la fonction const pour pouvoir changer les valeurs plus simplement //

const eauinitiale = 100;
const cafeinitiale = 350;
const prixcafe = 1.45;
const nbclient = 15;

//variables pour le récapitulatif final.On donne également le nombre de client qui vont prendre du café//

let eaurestante = eauinitiale;
let caferestant = cafeinitiale;
let cafedistribues = 0;
let clientsnonservis = 0;
let argentgagné = 0;


function machine(nbclient) {
    let numclient = 1;

    while (numclient <= nbclient && eaurestante >= 60 && caferestant >= 8) {

        // On vérifie qu'il reste des clients à servir et qu'il reste de l'eau et du café dans le réservoir//

        console.log("Préparation du café n°" + numclient)


        eaurestante = eaurestante - 60
        caferestant = caferestant - 8
        argentgagné = argentgagné + prixcafe
        cafedistribues = cafedistribues + 1

        console.log("café distribué!");
        afficheretat(eaurestante, caferestant, argentgagné);
        numclient = numclient + 1;
    }

    clientsnonservis = nbclient - cafedistribues;

    console.log("Récapitultif")
    console.log("nombre de cafés distribués" + cafedistribues)
    console.log("client no servis" + clientsnonservis)
    console.log("eau restante " + eaurestante + "ml")
    console.log("café restant " + caferestant + "g")
    console.log("argent gagné " + argentgagné + "€")
}

machine(nbclient)
//////////////DEVINER UN CHIFFRE /////////////////////
function findTheNumber() {

    let randNumber = Math.round(Math.random() * 10); //Générateur de nombre aléatoire
    let reponse = prompt("Entrez un chiffre entre 0 et 10"); // la réponse donnée par l'utilisateur

    reponse = parseInt(reponse, 10); //transforme input en number
    let essais = 3; // le nombre d'essais total pour l'utilisateur

    while (reponse != randNumber && essais > 0) { //l"utilisateur ne donne pas la bonne réponse alors =>
        essais--; // on décrémente les essais

        if (reponse > randNumber) { // l'utilisateur a donné une réponse au dessus ou en dessous de la bonne réponse, on le lui indique
            alert("Moins");
        } else {
            alert("Plus");
        }

        if (essais > 0) { // l'utilisateur a encore un ou plusieurs essai(s)
            reponse = prompt("essaie encore, il te reste " + essais + " essais");
        }
    }

    ///// BONNE REPONSE OU ESSAIS EPUISES
    if (reponse == randNumber) { //l"utilisateur trouve la bonne réponse
        alert("Bravo tu as trouvé! C'était bien" + randNumber + " qu'il fallait trouver!");
    }

    if (reponse != randNumber && essais == 0) {  // l'utilisateur n'a pas trouvé la bonne réponse et les 3 essais ont été utilisés
        alert("Perdu! Tu as utilisé tes 3 essais");
    }
}


///////////////////////////// INCREMENTER - DECREMENTER /////////////////////////////
function incrementation() {
    const myBtnIncrementation = document.getElementById('Btn-incrementer');
    const result = document.getElementById('resultIncr');

    let clic = 0 ;

    myBtnIncrementation.addEventListener('click', ()=>{
        for (i = 0; i < 1; i++){
            result.innerHTML = clic += 1;
        }
    })

}
function decrementation() {
    const myBtnDecrementation = document.getElementById('Btn-decrementer');
    const result = document.getElementById('resultDecr');

    let clic = 0 ;

    myBtnDecrementation.addEventListener('click', ()=>{
        result.innerHTML = clic -= 1;
    })

}


///////////////////////////// PILE OU FACE /////////////////////////////
function pileFace(){
    let btnPileFace = document.getElementById('btnPileFace');
    let result = document.getElementById('result');

    let valeurPiece = Math.random(1);
    console.log(valeurPiece);


    btnPileFace.addEventListener('click', ()=>{
        if (valeurPiece > 0.5){
            result.innerHTML = "PILE - Tu as perdu!";
        }else
            result.innerHTML = "FACE - J'ai gagné!";
    })

}


///////////////////////////// RENDRE VISIBLE UN MOT DE PASSE /////////////////////////////
function changeInputType(){
    const password = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');

    if(checkbox.checked){
        password.type ='text';
    }else{
        password.type ='password';
    }
}

///////////////////////////// VERIFICATION D'EGALITE DE MOTS DE PASSE /////////////////////////////
function checkPasswords(){
    let password = document.getElementById("passwordmdp");
    let checkPassword = document.getElementById("check-password");
    let alert = document.getElementById("alert");

    checkPassword.addEventListener('keyup', () => {
        if (password.value === checkPassword.value){
            alert.innerHTML = 'les mots de passe correspondent';
            alert.style.color = "green";
        }else{
            alert.innerHTML = 'les mots de passe ne correspondent PAS';
            alert.style.color = "red";
        }
    })

}


///////////////////////////// ANNEES BISSEXTILES /////////////////////////////
let check = document.getElementById("check");

check.addEventListener("click", () => {
    let year = document.getElementById("year").value ;
    if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
        resultat.innerHTML = year + ' est bissextile';
        resultat.style.color = "blue";
    } else {
        resultat.innerHTML = year + ' n\'est pas bissextile';
        resultat.style.color = 'red';
    }
})



///////////////////////////// ICONE ANIMEE /////////////////////////////

//balance.innerHTML = "&#xf24e";
//balanceDroite.innerHTML = "&#xf515";
//balanceGauche.innerHTML = "&#xf516";


function balanceScale(){
    let balance = document.getElementById('balanceIcon');
    balance.innerHTML = "&#xf24e";
    setTimeout(function (){
        balance.innerHTML = "&#xf515";
    },1000);
    setTimeout(function () {
        balance.innerHTML = "&#xf24e";
    }, 2000)
    setTimeout(function () {
        balance.innerHTML = "&#xf516";
    }, 3000)
}

setInterval(balanceScale, 5000)





let h3 = document.getElementById('h3-deployement');
let goodbye = document.getElementById('goodbye');

function Hover(){
    setTimeout(function () {
        h3.classList.add('h3-deploy')
    }, 1000)
    setTimeout(function () {
        goodbye.style.display = "block";
    }, 2000)
}

function StopHover(){
        h3.classList.remove('h3-deploy');
        goodbye.style.display = "none";
}



///////////////////////////// TITRE ANIME /////////////////////////////
function HideLoader(){
    document.getElementById("loadingAnimation").style.display = "none";
    document.getElementById('displayContent').style.display = "block";
    btnRefresh = document.getElementById('btnRefresh').style.display = "block";

}

btnLoader.addEventListener('click', ()=>{
    document.getElementById("loadingAnimation").style.display = "block";
    document.getElementById("btnLoader").style.display = "none";
    setTimeout (HideLoader, 3000);

})

/////////////////////////HORLOGE///////////////////////////
/////////////////////DATE ET HEURE////////////////////////
function pause(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function afficherDate()
{
    while(true)
    {
        await pause(1000);
        let cejour = new Date();
        let options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
        let date = cejour.toLocaleDateString("fr-FR", options);
        let heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
        var dateheure = "Aujourd'hui: " + date + " <br>" + heure;
        var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
        document.getElementById('dateheure').innerHTML = dateheure;
    }
}
afficherDate();


var now = new Date();
var heure   = now.getHours();
var minute  = now.getMinutes();
let time = heure + "h" +  minute;
console.log(time)
//////////////////////////////////////////////////////////////////

///////////////////////////// TO DO LIST /////////////////////////////
function addTask() {
    //ce qui est entré dans l'input
    let toDoAdding = document.getElementById('toDoInput').value;
    //ma liste UL
    let ul = document.getElementById('ul')
    //Pour message d'erreur
    let message = document.getElementById('p-alert')

    if (toDoAdding === ""){
        //message d'alerte
        message.innerHTML = "Aucune tâche ajoutée!"
        message.style.color = "red"
    }
    if (toDoAdding != ""){
        ///////ORDRE DE PROCEDURE//////
        /////// UL => SPAN => LI //////

        //message d'alerte
        message.innerHTML = "(" + time + "): " + "Tâche " + toDoAdding + " ajoutée!"
        message.style.color = "whitesmoke"

        //Création de la LI qui sera greffée à UL pour chaque tâche entrée
        let taskLI = document.createElement("li")

        //Création d'une span qui regroupe les boutons DELETE, CHECK et UNCHECK
        let spanLI = document.createElement('span')


        //Création du bouton pour l'icône poubelle (supprimer)
        let btnDelete = document.createElement("button")
        btnDelete.className = "btnDelete"
        btnDelete.innerHTML = "<i class=\"fa-sharp fa-solid fa-trash-can\"></i>"


        //Création d'un bouton pour valider la tâche
        let btnCheck = document.createElement('button')
        btnCheck.className = "btnCheck"
        btnCheck.innerHTML = "<i class=\"fa-solid fa-check\"></i>"

        //CRéation du bouton pour "dechecker" une tâcher
        let btnUncheck = document.createElement('button')
        btnUncheck.className = "btnUncheck"
        btnUncheck.innerHTML = "<i class=\"fa-solid fa-arrows-rotate\"></i>"
        btnUncheck.style.display = "none"

        //Création d'un bouton qui notifie qu'une tâche est en cours d'éxécution
        let btnInProgress = document.createElement('button')
        btnInProgress.className = "btnInProgress"
        btnInProgress.innerHTML = "<i class=\"fa-solid fa-flag\"></i> START"

        //Création d'un bouton qui notifie qu'une tâche n'est plus en cours d'éxécution
        let btnStopProgress = document.createElement('button')
        btnStopProgress.className = "btnStopProgress"
        btnStopProgress.innerHTML = "<i class=\"fa-solid fa-flag\"></i> STOP"

        //Validation de la suppression d'un tâche
        let btnValideSupp = document.createElement('button');
        btnValideSupp.innerHTML = "confirm"
        btnValideSupp.className = "btnConfirmDelete"

        taskLI.className = "liItems"

        //////OPTION DELETE///////
        btnDelete.addEventListener('click', (e)=>{
            e.preventDefault();
            message.innerHTML = "(" + time + "): " + " La tâche " + toDoAdding + " va être supprimée, êtes vous sûr?";
            message.style.color = "whitesmoke";
            message.appendChild(btnValideSupp);
        })
        btnValideSupp.addEventListener('click', (e)=>{
            e.preventDefault();
            taskLI.remove();
            message.innerHTML = "(" + time + "): " + "Tâche supprimée!";
            message.style.color = "whitesmoke";
        })
        ////////BTNS CHECK UNCHECK /////////
        btnCheck.addEventListener('click', (e)=>{
            e.preventDefault();
            taskLI.style.border = "2px solid grey"
            taskLI.style.textDecoration = "line-through";
            taskLI.style.color = "grey";
            btnCheck.style.display = "none";
            btnUncheck.style.display = "inline";
            message.innerHTML = "(" + time + "): " + "La tâche " + toDoAdding + " a été complétée!";
            message.style.color = "whitesmoke";
            }
        )
        btnUncheck.addEventListener('click', (e)=>{
            e.preventDefault();
            taskLI.style.border = "1px solid white"
            taskLI.style.textDecoration = "none";
            taskLI.style.color = "whitesmoke";
            btnCheck.style.display = "inline";
            btnUncheck.style.display = "none";
            message.innerHTML = "(" + time + "): " + "Annulation de la complétion de la tâche " + toDoAdding;
            message.style.color = "whitesmoke";
        })
        ////////BTN PROGRESS /////////
        btnInProgress.addEventListener('click', (e)=>{
            e.preventDefault();
            taskLI.style.border = "3px solid blue"
            taskLI.style.color = "blue"
            btnInProgress.style.display = "none"
            btnStopProgress.style.display = "inline"
        })
        btnStopProgress.addEventListener('click', (e)=>{
            e.preventDefault();
            taskLI.style.border = "1px solid white"
            taskLI.style.color = "white"
            btnInProgress.style.display = "inline"
            btnStopProgress.style.display = "none"
        })




        ul.appendChild(taskLI);

        //On greffe l'icône (le btnDelete) à la LI
        taskLI.innerHTML = toDoAdding ;
        spanLI.appendChild(btnInProgress);
        spanLI.appendChild(btnStopProgress)
        spanLI.appendChild(btnUncheck);
        spanLI.appendChild(btnCheck);
        spanLI.appendChild(btnDelete);
        taskLI.appendChild(spanLI);
        toDoAdding.value = "";
    }

}



//////////////////APPEL DES FONCTIONS//////////////
pileFace();
incrementation();
decrementation();
checkPasswords();
balanceScale();
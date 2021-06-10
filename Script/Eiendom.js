var firebaseConfig = {
    apiKey: "AIzaSyA5RQ7yH5cIjaFbfpmXqt3_AuM040UUbko",
    authDomain: "database-adb9d.firebaseapp.com",
    projectId: "database-adb9d",
    storageBucket: "database-adb9d.appspot.com",
    messagingSenderId: "640591224855",
    appId: "1:640591224855:web:f37133a7861cf365527c52"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const list = document.querySelector("ul");



//--------------------------------------------Lager

const inputs = document.querySelectorAll("input")
let Sender = []

function Send() {
    let obj = {}
    inputs.forEach((input) => {
        obj[input.id] = input.value;
    })
    db.collection("Eiendomsregrister").add(obj);
    clear();
    show();
}

const Adresse = document.getElementById("Adresse")
const Postnummer = document.getElementById("Postnummer")
const Poststed = document.getElementById("Poststed")
const Kommune = document.getElementById("Kommune")
const Eiendomsnummer = document.getElementById("Eiendomsnummer")
const Areal = document.getElementById("Areal")
const Personnumber = document.getElementById("Personnumber")


function clear() {
    Adresse.value = "";
    Postnummer.value = "";
    Poststed.value = "";
    Kommune.value = "";
    Eiendomsnummer.value = "";
    Areal.value = "";
    Personnumber.value = "";

}



//-------------------------------Visser


function show() {
    db.collection("Eiendomsregrister").onSnapshot((snap) => {
        let output = ""
        const documents = snap.docs.map((el) => el.data());
        documents.forEach((doc) => {
            output += `
            <li> ${doc.Adresse}</li>
            <li> ${doc.Postnummer}</li>
            <li> ${doc.Poststed}</li>
            <li> ${doc.Kommune}</li>
            <li> ${doc.Eiendomsnummer}</li>
            <li> ${doc.Areal}</li>
            <li> ${doc.Personnumber}</li>
            `;
        })
        list.innerHTML = output
    })
}
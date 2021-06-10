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
    db.collection("Personer-laget").add(obj);
    clear();
    show();
}

const Fornavn = document.getElementById("Fornavn")
const Personnumber = document.getElementById("Personnumber")
const Etternavn = document.getElementById("Etternavn")
const fødselsdato = document.getElementById("fødselsdato")
const Postaddrese = document.getElementById("Postaddrese")

function clear() {
    Fornavn.value = "";
    Personnumber.value = "";
    Etternavn.value = "";
    fødselsdato.value = "";
    Postaddrese.value = "";
}



//-------------------------------Visser


function show() {
    db.collection("Personer-laget").onSnapshot((snap) => {
        let output = ""
        const documents = snap.docs.map((el) => el.data());
        documents.forEach((doc) => {
            output += `
            <li> ${doc.Fornavn}</li>
            <li> ${doc.Etternavn}</li>
            <li> ${doc.fødselsdato}</li>
            <li> ${doc.Personnumber}</li>
            <li> ${doc.Postaddrese}</li>
            `;
        })
        list.innerHTML = output
    })

}
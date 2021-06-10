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
    db.collection("Biler").add(obj);
    clear();
    show();
}


const Kjøretøytype = document.getElementById("Kjøretøytype")
const Eier = document.getElementById("Eier")
const Drivstofftype = document.getElementById("Drivstofftype")
const Registreringsår = document.getElementById("Registreringsår")
const Chassisnummer = document.getElementById("Chassisnummer")
const antallseter = document.getElementById("antallseter")
const Vekt = document.getElementById("Vekt")
const Personnumber = document.getElementById("Personnumber")


function clear() {
    Kjøretøytype.value = "";
    Eier.value = "";
    Drivstofftype.value = "";
    Registreringsår.value = "";
    Chassisnummer.value = "";
    antallseter.value = "";
    Vekt.value = "";
    Personnumber.value = "";

}



//-------------------------------Visser


function show() {
    db.collection("Biler").onSnapshot((snap) => {
        let output = ""
        const documents = snap.docs.map((el) => el.data());
        documents.forEach((doc) => {
            output += `
            <li> ${doc.Kjøretøytype}</li>
            <li> ${doc.Eier}</li>
            <li> ${doc.Drivstofftype}</li>
            <li> ${doc.Registreringsår}</li>
            <li> ${doc.Chassisnummer}</li>
            <li> ${doc.antallseter}</li>
            <li> ${doc.Vekt}</li>
            <li> ${doc.Personnumber}</li>
            
            `;
        })
        list.innerHTML = output
    })
}
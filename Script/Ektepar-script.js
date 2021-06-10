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
    db.collection("Ekteskapregister").add(obj);
    clear();
    show();
}

const Person1 = document.getElementById("Person1")
const Person2 = document.getElementById("Person2")


function clear() {
    Person1.value = "";
    Person2.value = "";

}



//-------------------------------Visser


function show() {
    db.collection("Ekteskapregister").onSnapshot((snap) => {
        let output = ""
        const documents = snap.docs.map((el) => el.data());
        documents.forEach((doc) => {
            output += `
            <li> ${doc.Person1}</li>
            <li> ${doc.Person2}</li>
            `;
        })
        list.innerHTML = output
    })
}
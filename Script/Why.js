//-------------------------------Visser

function link() {
    db.collection("Biler").onSnapshot((snap) => {
        const documents = snap.docs.map((el) => el.data());
        documents.forEach((doc) => {
            Car = doc.Personnumber

        })
    })
    db.collection("Personer-laget").onSnapshot((snap) => {

        const documents = snap.docs.map((el) => el.data());
        documents.forEach((doc) => {
            per = doc.Personnumber

        })

    })
    db.collection("Eiendomsregrister").onSnapshot((snap) => {
        const documents = snap.docs.map((el) => el.data());
        documents.forEach((doc) => {
            Eindom = doc.Personnumber

        })






        if (Car == per || Car == Eindom || per == Eindom) {
            person();
            setTimeout(biler, 2000);
            setTimeout(Eiendom, 4000);
        }
        if (Car == per || Car != Eindom || per != Eindom) {
            person();
            setTimeout(biler, 2000);
        }
        if (Car != per || Car != Eindom || per == Eindom) {
            person();
            setTimeout(Eiendom, 2000);
        }
        if (Car != per || Car != Eindom || per != Eindom) {
            person();
        } else {
            list.innerHTML = "He or She is dead.";
        }
    })
}
link();










function person() {
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

function biler() {
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

function Eiendom() {
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
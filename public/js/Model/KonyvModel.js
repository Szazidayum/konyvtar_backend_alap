class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
        this.token = token;

        //console.log("KonyvModel");
    }
    adatTorol(adat){
        console.log("törlöm a modelben",adat);
    }
    adatModosit(adat){
        console.log("módosítom a modelben",adat);
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':this.token,
            },
            body: JSON.stringify(myCallBack),
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data;
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatUj(vegpont, adat) {
        fetch(vegpont, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':this.token,
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data;
                console.log("Új adat "+this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatModosit(vegpont, adat) {
        console.log( adat);
        vegpont += "/" +adat.id;
        
        fetch(vegpont, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':this.token,
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data;
                console.log("Módosítottam: "+data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatTorol(vegpont, adat) {
        console.log("Töröltem: " + adat);
        vegpont += "/" + adat.id
        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN':this.token,
            },
        })
            .then()
            .then(() => {
                console.log("Sikeres törlés");
                // this.#konyvekTomb = data;
                // myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default KonyvModel;
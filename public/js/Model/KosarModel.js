class KosarModel {
    #kosarTomb = [];

    constructor(){

    }
    adatKosarba(adat){
        this.#kosarTomb.push(adat);
    }
    getKosarTomb(){
        return this.#kosarTomb;
    }
}

export default KosarModel;

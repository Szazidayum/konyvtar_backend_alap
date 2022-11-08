//listázzuk a könyveket div-ekben
import KonyvPublicView from "./konyvPublicView.js";

class KonyvekPublicView {
    constructor(tomb, szuloElem) {
        //console.log("public");
        szuloElem.html("");
        szuloElem.append(`<div class="divKonyvek"></div>`);
        this.divElem = szuloElem.children("div:last-child");

        tomb.forEach(konyv => {
            const konyvObj = new KonyvPublicView(konyv, this.divElem);
            this.konyvMegjelenit(konyvObj);
        });
    }

    konyvMegjelenit(elem){
            //console.log(elem);
       
        
    }
}

export default KonyvekPublicView;
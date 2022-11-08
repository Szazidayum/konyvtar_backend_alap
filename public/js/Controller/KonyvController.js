import KonyvekPublicView from "../View/KonyvekPublicView.js"
import KonyvekAdminView from "../View/KonyvekAdminView.js"
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        const token = $('meta[name="csrf-token"]').attr("content");
        
        const konyvModel = new KonyvModel(token);
        this.vegpont = "konyvek";
        $("#public").on("click", () =>{
            konyvModel.adatBe(this.vegpont, this.konyvPublicAdatok);
        })
        $("#admin").on("click", () =>{
            konyvModel.adatBe(this.vegpont, this.konyvAdminAdatok);
        })
        
        
        $(window).on("modosit",(event)=>{
            console.log(this.vegpont);
            konyvModel.adatModosit(this.vegpont, event.detail);
        });
        $(window).on("torol",(event)=>{
            //console.log("controllerben töröl", event.detail);
            konyvModel.adatTorol(this.vegpont, event.detail);
        });
        
    }

    konyvAdminAdatok(tomb) {
        let szuloElem = $(".konyvekAdminLista");
        new KonyvekAdminView(tomb,szuloElem);
    }
    konyvPublicAdatok(tomb) {
        let szuloElem = $(".konyvekPublicLista");
        new KonyvekPublicView(tomb,szuloElem);
    }
}

export default KonyvController;
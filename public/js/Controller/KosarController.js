import KosarModel from "../Model/KosarModel.js";
import KosarView from "../View/KosarView.js";

class KosarController{
    constructor(){
        const kosarModel = new KosarModel();
        const kosarTartalom = kosarModel.getKosarTomb();
        $(".kosarButton").on("click", ()=>{
               // console.log(kosarTartalom);
                this.kosarAdatok(kosarTartalom);
        });
        $(window).on("kosarba",(event)=>{
           // console.log("controllerben kosárba helyez", event.detail);
            if(kosarTartalom.filter(x => x.id==event.detail.id).length>0){
                /* console.log("már benne van a tömbben"); 
                filter: visszaad egy tömböt, amire a feltétel igaz
                */
                kosarTartalom.filter(x => x.id==event.detail.id)[0].db++;
            }else{
                event.detail.db=1;
                kosarModel.adatKosarba(event.detail);
            }
            
        });
    }
    kosarAdatok(tomb){
        let szuloElem = $(".kosaram");
        new KosarView(tomb,szuloElem);
    }
}

export default KosarController;
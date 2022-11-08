class KonyvAdminView {
    #elem
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
       //console.log(elem);
       this.#elem = elem;

        szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td>${elem.cim}</td>
        <td>${elem.szerzo}</td>
        <td>${elem.ar}</td>
        <td><button id="M${elem.id}">módosítás</button></td>
        <td><button id="T${elem.id}">törlés</button></td>
        </tr>`);
       //Az objektum egyes html elemeinek az elnevezése
       this.recordElem = szuloElem.children("tr:last-child");
       
       //gombokat elnevezzük
       this.modositElem = $(`#M${elem.id}`);
       this.torolElem = $(`#T${elem.id}`);
       

       this.modositElem.on("click", ()=>{
        this.#elem.cim=this.#elem.cim+"2";
        this.kattintasTrigger("modosit");
       
       });
       this.torolElem.on("click", ()=>{

        this.kattintasTrigger("torol");
       });
    }

    kattintasTrigger(esemenyNeve){
        const event= new CustomEvent(esemenyNeve,{detail:this.#elem})
        window.dispatchEvent(event);
    }
}

export default KonyvAdminView;
class KosarView{
    constructor(tomb, szulotomb){
        szulotomb.html("");
        szulotomb.append(`Kosaram:`)
        for (let i = 0; i < tomb.length; i++) {
            szulotomb.append(`<tr>
        <td>${tomb[i].cim}</td>
        <td>${tomb[i].szerzo}</td>
        <td><button id="T${tomb[i].id}">-</button></td>
        <td>${tomb[i].db}</td>
        <td><button id="H${tomb[i].id}">+</button></td>
        </tr>`);
        this.kosarbolTorol = $(`#T${tomb[i].id}`);
        this.kosarbolTorol.on("click", ()=>{
            if(tomb[i].db==1){
                tomb.splice(i,1);
            }else{
                tomb[i].db--;
            }    
        });
        this.kosarbaAd = $(`#H${tomb[i].id}`);
        this.kosarbaAd.on("click", ()=>{
                tomb[i].db++;  
        });
        }
    }
}
export default KosarView;


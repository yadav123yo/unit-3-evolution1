function append(){
    let data = JSON.parse(localStorage.getItem("students")) ;
    let all_products=document.getElementById("all_products");


    data.forEach(function(el){
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = el.image

        let type = document.createElement("p")
        type.innerText = el.type

        let price = document.createElement("p")
        price.innerText = el.price

        let desc = document.createElement("p")
        desc.innerText = el.desc

        let btn = document.createElement("button");
        btn.innerText = "Remove"
        btn.addEventListener("click",function(event){
            event.target.parentNode.remove();
        });

        div.append(img,type,price,desc,btn)
        all_products.append(div)
    });
}
append();


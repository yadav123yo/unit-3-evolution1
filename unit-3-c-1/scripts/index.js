//store the products array in localstorage as "products"


function Student(t,d,p,i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}

function add_product(event){
    event.preventDefault();

    let form = document.getElementById("products");
    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let s1 = new Student(type,desc,price,image)

   let data = JSON.parse(localStorage.getItem("students")) ||[];
   data.push(s1)

   localStorage.setItem("students",JSON.stringify(data))

   console.log(s1)
   document.getElementById("type").value = null
   document.getElementById("desc").value = null
   document.getElementById("price").value = null
   document.getElementById("image").value = null
   
}
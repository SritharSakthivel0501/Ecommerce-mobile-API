let data = []
let ul = document.querySelector(".main")
let int = document.querySelector(".int")
let h3 = document.querySelector("h3")

window.addEventListener("DOMContentLoaded",()=>{

    let products = fetch("https://dummyjson.com/products")
.then(res=>res.json())
.then(json=>{
    data.push(json)
    // console.log(data)   
    for(let i=0;i<data.length;i++){
        let inter = data[i].products
        console.log(inter);
        
        for(let i=0;i<inter.length;i++){


            let div = document.createElement("div")
            div.className = "divs"
            let title = document.createElement("p")
            title.className = "names"
            let img = document.createElement("img")



            let a =document.createElement("a")
            a.href = `next.html?id=${inter[i].id}`


            title.innerText = inter[i].title
            img.src = inter[i].images[1]

            

           
           ul.appendChild(a)
           div.appendChild(img)
           div.appendChild(title)
           a.appendChild(div)
           
        }
    }
   
})

let int = document.querySelector(".int")
int.addEventListener("keyup",()=>{
    let divs = document.querySelectorAll(".divs")
    for (let j = 0; j < divs.length; j++) {  
        // console.log(divs[j]);
        if(divs[j].innerText.toUpperCase().indexOf(int.value.toUpperCase()) != -1){
            divs[j].style.display = "block"
            h3.innerText =""
        }
        else{
            divs[j].style.display = "none"
            h3.innerText = "please enter the corent search"
        }
    }
})
})

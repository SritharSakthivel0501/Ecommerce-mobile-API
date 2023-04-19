let main = document.querySelector(".main")
let spans = document.querySelector(".spans")
let cordimg = document.querySelector(".cordimg")

let id=window.location.search.slice(4);


window.addEventListener("DOMContentLoaded",()=>{

    spans.style.visibility = "visible"

    // console.log(window.location.search.slice(4));

    fetch(`https://dummyjson.com/products/${id}`)
    .then(data => data.json())
    .then(value => {

// console.log(value)



        let div = document.createElement("div")
        let img = document.createElement("img")
        let brand = document.createElement("h2")
        let title = document.createElement("h1")
        let category = document.createElement("h4")
        let description = document.createElement("h4")
        let price = document.createElement("h3")
        let discountPercentage = document.createElement("p")



        img.src = `${value.thumbnail}`
        brand.innerText = value.title
        title.innerText = value.brand
        description.innerText = value.description
        category.innerText = value.category
        price.innerText = `₹${value.price}`
        discountPercentage.innerText = `discountPercentage${value.discountPercentage}`




        main.appendChild(img)
        main.appendChild(div)
        div.appendChild(title)
        div.appendChild(brand)
        div.appendChild(price)
        div.appendChild(category)
        div.appendChild(description)
        div.appendChild(discountPercentage)

        spans.style.visibility = "hidden"


        


        let coder = value.images
        // console.log(coder);
        for (let j = 0; j < coder.length; j++) {
            // console.log(coder[j]);

            let imagess = document.createElement("img")
            imagess.className = "mineimg"


            imagess.src = coder[j]


            cordimg.appendChild(imagess)
        }


        
    })
})
 


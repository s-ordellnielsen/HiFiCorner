
import "../../style/modules/productSpecs.scss";
import productSpecsReviewArticle from "./productSpecsReviewArticle.js"
import productSpecsConnectivityTypeUL from "./productSpecsConnectivityTypeUL.js"



function productSpecs(product) {
console.log("product", product)

    const element = document.createElement('section')
    element.classList.add('productSpecs')
    element.classList.add('standardMargin')

    let productSpecsLinesSound = document.createElement("div")
    productSpecsLinesSound.classList.add("productSpecs__lines")
    element.appendChild(productSpecsLinesSound)

    let productSpecsSoundArticle = document.createElement("article")
    productSpecsSoundArticle.classList.add("productSpecs__soundArticle")

    productSpecsSoundArticle.innerHTML = `
        <div class="productSpecs__specHead sheadSound">
                    <h3 class="productSpecs__header">Sound</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__sound">
                    <li class="productSpecs__soundDesc">
                        ${product.specs.sound}

                    </li>

                </ul>
        `
    element.appendChild(productSpecsSoundArticle)

    let productSpecsSoundUL = element.querySelector(".productSpecs__sound")

    console.log("soundUL", productSpecsSoundUL)

    element.querySelector(".sheadSound").addEventListener("click", function(){
        console.log("soundVis")
        productSpecsSoundUL.classList.toggle("productSpecs__sound--visible")
        
    })

    //style: closed: opaci 0, height: 0 overfl: hidden 
    //style: --visible: opacity 1 height "define" transition: "define"
    
    let productSpecsLinesDesign = document.createElement("div")
    productSpecsLinesDesign.classList.add("productSpecs__lines")
    element.appendChild(productSpecsLinesDesign)

    let productSpecsDesignArticle = document.createElement("article")
    productSpecsDesignArticle.classList.add("productSpecs__designArticle")
    productSpecsDesignArticle.innerHTML =`
        <div class="productSpecs__specHead sheadDesign">

        <h3 class="productSpecs__header">Design</h3>
        <i data-feather="arrow-down-circle"></i>
        </div>
        <ul class="productSpecs__design">
        <li class="productSpecs__height">Height: ${product.specs.design.height}  mm</li>
        <li class="productSpecs__width">Width: ${product.specs.design.width} mm</li>
        <li class="productSpecs__weight">Weight: ${product.specs.design.weigth} g</li>
        <li class="productSpecs__designDesc">Design description: ${product.specs.design.design_desc}.</li>
        </ul>
    `
    element.appendChild(productSpecsDesignArticle)

    let productSpecsDesignUL = element.querySelector(".productSpecs__design")

    console.log("designUL", productSpecsDesignUL)

    element.querySelector(".sheadDesign").addEventListener("click", function(){
        console.log("designVis")
        productSpecsDesignUL.classList.toggle("productSpecs__design--visible")
        
    })

    //style: closed: opaci 0, height: 0 overfl: hidden 
    //style: --visible: opacity 1 height "define" transition: "define"



    let productSpecsLinesConnectivity = document.createElement("div")
    productSpecsLinesConnectivity.classList.add("productSpecs__lines")
    element.appendChild(productSpecsLinesConnectivity)

    let productSpecsConnectivityArticle = document.createElement("article")
    productSpecsConnectivityArticle.classList.add("productSpecs__connectivityArticle")
    productSpecsConnectivityArticle.innerHTML =`
        <div class="productSpecs__specHead  sheadConnectivity">

            <h3 class="productSpecs__header">Connectivity</h3>
            <i data-feather="arrow-down-circle"></i>
        </div>
        <ul class="productSpecs__connectivity">
            <li class="productSpecs__battery">Battery: ${product.specs.connectivity.battery}</li>
            <li class="productSpecs__powerSupply">Power supply: ${product.specs.connectivity.power}</li>
            <h4>Connection types:</h4>
        </ul>
    `

    

    let productSpecsConnectivityUL = productSpecsConnectivityArticle.querySelector(".productSpecs__connectivity")

    console.log("uliUL", productSpecsConnectivityUL)
    productSpecsConnectivityUL.appendChild(productSpecsConnectivityTypeUL(product))
    
    

    element.appendChild(productSpecsConnectivityArticle)



    element.querySelector(".sheadConnectivity").addEventListener("click", function(){
        console.log("connectVis")
        productSpecsConnectivityUL.classList.toggle("productSpecs__connectivity--visible")
        
    })


    let productSpecsLinesReview = document.createElement("div")
    productSpecsLinesReview.classList.add("productSpecs__lines")
    element.appendChild(productSpecsLinesReview)

    element.appendChild(productSpecsReviewArticle(product))

    let productSpecsLinesStock = document.createElement("div")
    productSpecsLinesStock.classList.add("productSpecs__lines")
    element.appendChild(productSpecsLinesStock)

    let productSpecsStockArticle = document.createElement("article")
    productSpecsStockArticle.classList.add("productSpecs__stockArticle")
    productSpecsStockArticle.innerHTML =`
    <div class="productSpecs__specHead sheadStock">
                    <h3 class="productSpecs__header">Inventory</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__stock">
                    <li>Number of items in stock: <span class="productSpecs__stockAmount">${product.stock}</span></li>
                </ul>
    `
    element.appendChild(productSpecsStockArticle)

    let productSpecsStockUL = element.querySelector(".productSpecs__stock")

    element.querySelector(".sheadStock").addEventListener("click", function(){
        console.log("stockVis")
        productSpecsStockUL.classList.toggle("productSpecs__stock--visible")
        
    })

    

    // Code here


    
    return element
}
export default productSpecs

/*
<section class="productSpecs standardMargin">
       
            <div class="productSpecs__lines"></div>
            <article class="productSpecs__designArticle">

                <div class="productSpecs__specHead">

                    <h3 class="productSpecs__header">Design</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__design">
                    <li class="productSpecs__height"></li>
                    <li class="productSpecs__width"></li>
                    <li class="productSpecs__weight"></li>
                    <li class="productSpecs__designDesc"></li>
                </ul>
            </article>
            <div class="productSpecs__lines"></div>
            <article class="productSpecs__connectivityArticle">

                <div class="productSpecs__specHead">

                    <h3 class="productSpecs__header">Connectivity</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__connectivity">
                    <li class="productSpecs__battery"></li>
                    <li class="productSpecs__powerSupply"></li>
                    <ul class="productSpecs__type">


                    </ul>
                </ul>
            </article>
            <div class="productSpecs__lines"></div>
            <article class="productSpecs__reviewsArticle">

                <div class="productSpecs__specHead">
                    <h3 class="productSpecs__header">Reviews</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <article class="productSpecs__reviews">


                </article>
            </article>
            <div class="productSpecs__lines"></div>
            <article class="productSpecs__stockArticle">

                <div class="productSpecs__specHead">
                    <h3 class="productSpecs__header">Inventory</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__stock">
                    <li>Number of items in stock: <span class="productSpecs__stockAmount"></span></li>
                </ul>
            </article>



        </section>
        <div class="reviewpr" style="cursor: pointer;">
            <div class="reviewThisProduct">
                <i data-feather="message-square"></i>
                <p class="reviewThisProductParagraph">Review<br>Product</p>
            </div>

        </div>*/
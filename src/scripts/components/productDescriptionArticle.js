import productDescriptionRating from "./productDescriptionRating"
import productDesc from "./productDesc.js"
import productHeadlineDesktop from "./productHeadlineDesktop.js"
import productDescriptionFlavorText from "./productDescriptionFlavorText.js"
import colorPicker from "./colorPicker.js" 
import addToCart from "./addToCart.js"
import "../../style/modules/productDescriptionArticles.scss"


function productDescriptionArticle(product) {
    const element = document.createElement('article')
    element.classList.add('productDescription__article')

    console.log("halloArticle")

    element.appendChild(productHeadlineDesktop(product.name))

    let productDescriptionDirectionWrapper = document.createElement("div")
    productDescriptionDirectionWrapper.classList.add("productDescription__directionWrapper")

    let productDescriptionRatingPlusDesc = document.createElement("div")
    productDescriptionRatingPlusDesc.classList.add("productDescription__ratingPlusDesc")

    productDescriptionRatingPlusDesc.appendChild(productDescriptionRating(product))

    productDescriptionRatingPlusDesc.appendChild(productDescriptionFlavorText(product.flavor_text))

    productDescriptionRatingPlusDesc.appendChild(productDesc(product.desc))

    productDescriptionDirectionWrapper.appendChild(productDescriptionRatingPlusDesc)

    productDescriptionDirectionWrapper.appendChild(colorPicker(product))

    element.appendChild(productDescriptionDirectionWrapper)

    let price = document.createElement("p")
    price.classList.add("productDecription__price")
    price.innerText = "£" + product.price
    element.appendChild(price)

    let addToCartAndAmount = document.createElement("div")
    addToCartAndAmount.classList.add("addToCartAndAmount")

    let amountDiv = document.createElement("div")
    amountDiv.classList.add("amount")

    let amountLabel = document.createElement("label")
    amountLabel.setAttribute("for", "amount")
    amountLabel.innerText = "Amount: "
    amountDiv.appendChild(amountLabel)


    let amountInput = document.createElement("input")
    amountInput.type = "number"
    amountInput.name = "amount"
    amountInput.id = "amount"
    amountInput.value = 1
    amountInput.min = 1
    amountInput.max = 10
    amountInput.classList.add("productDecription__amount")
    amountInput.classList.add("productAmount")

    amountInput.addEventListener("change", (function(event){
        var productAmount = event.target.value
        console.log("productAmount", productAmount)
    }))

    amountDiv.appendChild(amountInput)


    addToCartAndAmount.appendChild(amountDiv)

    addToCartAndAmount.appendChild(addToCart())

    element.appendChild(addToCartAndAmount)

    let productDescriptionShipping = document.createElement("p")
    productDescriptionShipping.classList.add("productDecription__shipping")
    productDescriptionShipping.innerText = `Shipping every day at 5:00 PM`


   
    
    
    
    
    return element
}
export default productDescriptionArticle


/*
<article class="productDescription__article">

<div class="productDescription__directionWrapper">
    <div class="productDescription__ratingPlusDesc">
        <div class="productDescription__rating">
            <div class="productDecription__stars">
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
            </div>
            <p class="productDecription__ratingFigure"></p>
            <p class="productDecription__reviewBasis">Based on <span
                    class="productDecription__totalReviews">76</span> reviews.</p>
        </div>
        <h3 class="productDescription__flavor_text">________</h3>
        <p class="productDescription__desc">__________ __ __________ __ ____ __________ __ ____
            __________ __________ __ ____ __________ __ __________ __ ____
        </p>
    </div>
    <div class="productDecription__colorPickerDiv">
        


    </div>
</div>
<p class="productDecription__price">100£</p>
<div class="addToCartAndAmount">
    <button class="productDecription__addToCart standardBtn">
        <h4>Add to cart</h4>
    </button>
    <input type="number" name="amount" id="" class="productDecription__amount" value="1" min="1" max="10">
</div>
<p class="productDecription__shipping">Shipping every day at 5:00 PM</p>



</article>*/
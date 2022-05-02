import "../../style/base/_variables.scss";
import "./productDescriptionRating.scss";

function productDescriptionRating(product) {
    const element = document.createElement('div')
    element.classList.add('productDescription__rating')

    let productDecriptionStarsAndRatingFigure = document.createElement("div")
    productDecriptionStarsAndRatingFigure.classList.add("productDecription__starsAndRatingFigure")

    let productDecriptionStars = document.createElement("div")
    productDecriptionStars.classList.add("productDecription__stars")




    

    let productAmountOfReviews = product.specs.reviews.length



 
   

    let allStars = 0;
    product.specs.reviews.forEach((singleReview) => allStars = allStars + singleReview.stars)
    console.log("allStars", allStars)
    let productAvergageRating = (allStars / productAmountOfReviews).toFixed(1)

    console.log("average", productAvergageRating)





    

    

    productDecriptionStarsAndRatingFigure.appendChild(productDecriptionStars)

    let productDecriptionRatingFigure = document.createElement("p")
    productDecriptionRatingFigure.classList.add("productDecription__ratingFigure")
    productDecriptionRatingFigure.innerHTML = `
    (
        <span>${productAvergageRating}</span>
    )
    `

    let productDecriptionReviewBasis = document.createElement("p")
    productDecriptionReviewBasis.classList.add("productDecription__reviewBasis")
    productDecriptionReviewBasis.innerHTML = `Based on <span
    class="productDecription__totalReviews">${productAmountOfReviews}</span> reviews.
    
    `
    productDecriptionStarsAndRatingFigure.appendChild(productDecriptionRatingFigure)
    element.appendChild(productDecriptionStarsAndRatingFigure)
    element.appendChild(productDecriptionReviewBasis)



    
    return element
}
export default productDescriptionRating

/*
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
        */
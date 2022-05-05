
import "../../style/modules/productDescriptionRating.scss";

function productDescriptionRating(product) {
    const element = document.createElement('div')
    element.classList.add('productDescription__rating')

    let productDecriptionStarsAndRatingFigure = document.createElement("div")
    productDecriptionStarsAndRatingFigure.classList.add("productDecription__starsAndRatingFigure")

    let productDecriptionStars = document.createElement("div")
    productDecriptionStars.classList.add("productDecription__stars")

     //Her er reviewStar som ren svg. Tak Sebastian (download svg > højreklik på svg i browser > undersøg > se svg-koden i 'elements' > højreklik på koden > vælg 'edit as html' > kopier til udklipsholder)
     let starSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'


    






    

    let productAmountOfReviews = product.specs.reviews.length



 
   

    let allStars = 0;
    product.specs.reviews.forEach((singleReview) => allStars = allStars + singleReview.stars)
    console.log("allStars", allStars)
    let productAvergageRating = (allStars / productAmountOfReviews).toFixed(1)
    let productAvergageRatingRound = (allStars / productAmountOfReviews).toFixed(0)



    console.log("average", productAvergageRating)
    console.log("averageRound", productAvergageRatingRound)

        //Herunder har vi en tom string
        let productRatingStars = ""

        //Og dette for-loop fylder den tomme string med det antal starSVG'er, som er angivet i reviewRating 
        for(let i = 0; i < productAvergageRatingRound; i++){
            productRatingStars += starSVG
        }
        
    
        console.log("productRatingStars", productRatingStars)
    
        productDecriptionStars.innerHTML = productRatingStars

        






    

    

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
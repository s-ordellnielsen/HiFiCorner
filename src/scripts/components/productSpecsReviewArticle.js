function productSpecsReviewArticle(product) {
    const reviewElement = document.createElement('article')
    reviewElement.classList.add('productSpecs__reviewsArticle')

    let localHost3001 = "http://localhost:3001"

    //Her er reviewStar som ren svg. Tak Sebastian (download svg > højreklik på svg i browser > undersøg > se svg-koden i 'elements' > højreklik på koden > vælg 'edit as html' > kopier til udklipsholder)
    let starSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'


    reviewElement.innerHTML =`
                <div class="productSpecs__specHead sheadReviews">
                    <h3 class="productSpecs__header">Reviews</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
    `
    let productSpecsReviews = document.createElement("div")
    productSpecsReviews.classList.add("productSpecs__reviews")

  




    let productReviewsArray = product.specs.reviews

    console.log("productReviewsArray", productReviewsArray)

    productReviewsArray.forEach(function (element){
        let userReviewDiv = document.createElement("div")
        userReviewDiv.classList.add("productSpecs__reviewRatingDiv")
        let userIcon = document.createElement("img")
        //Herunder concatinater jeg første del af URLtsring til databasen med anden del af URL'en billedet hentet fra databasen
        userIcon.src = localHost3001 + element.user_icon[0]
        console.log("userIconSrc", userIcon.src)
        userIcon.classList.add("productSpecs__userIcon")
        let userIconDiv = document.createElement("div")
        userIconDiv.classList.add("productSpecs__userIconDiv")
        userIconDiv.appendChild(userIcon)
        let userNameP = document.createElement("p")
        userNameP.classList.add("productSpecs__userNameP")
        let userNamePInnerText = document.createTextNode(element.username)
        userNameP.appendChild(userNamePInnerText)
        let userInfoDiv = document.createElement("div")
        userInfoDiv.classList.add("productSpecs__userInfoDiv")
        userInfoDiv.appendChild(userIconDiv)
        userInfoDiv.appendChild(userNameP)

        let reviewRating = element.stars
        console.log("reviewRating", reviewRating) //antal stjerner

        let reviewStarsDiv = document.createElement("div")
        reviewStarsDiv.classList.add("productSpecs__reviewStarsDiv")
        

        //Herunder har vi en tom string
        let currentRatingStars = ""

        //Og dette for-loop fylder den tomme string med det antal starSVG'er, som er angivet i reviewRating 
        for(let i = 0; i < reviewRating; i++){
            currentRatingStars += starSVG
        }


        reviewStarsDiv.innerHTML = currentRatingStars
        
        let reviewRatingP = document.createElement("p")
        reviewRatingP.classList.add("productSpecs__reviewRatingP")
        let reviewRatingPInnerText = document.createTextNode("("+ element.stars +")")
        reviewRatingP.appendChild(reviewRatingPInnerText)
        let eachUserReviewRatingDiv = document.createElement("div")
        eachUserReviewRatingDiv.classList.add("productSpecs__eachUserReviewRatingDiv")
        eachUserReviewRatingDiv.appendChild(reviewStarsDiv)
        eachUserReviewRatingDiv.appendChild(reviewRatingP)

        let reviewCommentP = document.createElement("p")
        reviewCommentP.classList.add("productSpecs__reviewCommentP")
        let reviewCommentPInnerText = document.createTextNode(element.review_comment)
        reviewCommentP.appendChild(reviewCommentPInnerText)

        let reviewDateP = document.createElement("p")
        reviewDateP.classList.add("productSpecs__reviewDateP")
        let reviewDatePInnerText = document.createTextNode(element.review_date)
        reviewDateP.appendChild(reviewDatePInnerText)


        userReviewDiv.appendChild(userInfoDiv)
        userReviewDiv.appendChild(eachUserReviewRatingDiv)
        userReviewDiv.appendChild(reviewCommentP)
        userReviewDiv.appendChild(reviewDateP)

        productSpecsReviews.appendChild(userReviewDiv)

        reviewElement.appendChild(productSpecsReviews)
    })
    
    reviewElement.querySelector(".sheadReviews").addEventListener("click", function(){
        console.log("reviewVis")
        productSpecsReviews.classList.toggle("productSpecs__reviews--visible")
        
    })
   
    // Code here
    
    return reviewElement
    
}
export default productSpecsReviewArticle


/*
                <div class="productSpecs__specHead">
                    <h3 class="productSpecs__header">Reviews</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <article class="productSpecs__reviews">


                </article>
                */
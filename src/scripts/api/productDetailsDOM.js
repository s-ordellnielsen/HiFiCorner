
function getProductDetails(id) {
    fetch("http://localhost:3001/products", {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': ' * '
        }
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log('fejl')
                return []
            }
            return response.json()
        })
        .then(function (data) {
            console.log("data fra l 16", data);

            //Herunder sammenligner vi id fra databasen på server med id fra querryString
            //Og ud fra den sammenligning kan vi deklarere en product-variabel
            let product = data.find(element => element.id === id)

            console.log("found", product)
            
            document.title += " - " + product.name

            let productName = document.getElementsByClassName("productDescription__name")[0]
            let productDesc = document.getElementsByClassName("productDescription__desc")[0]
            let productFlavorText = document.getElementsByClassName("productDescription__flavor_text")[0]
            let colorPickerDiv = document.getElementsByClassName("productDecription__colorPickerDiv")[0]
            let productPrice = document.getElementsByClassName("productDecription__price")[0]
            let productSoundDesc = document.getElementsByClassName("productSpecs__soundDesc")[0]
            let productHeight = document.getElementsByClassName("productSpecs__height")[0]
            let productWidth = document.getElementsByClassName("productSpecs__width")[0]
            let productWeight = document.getElementsByClassName("productSpecs__weight")[0]
            let productDesignDesc = document.getElementsByClassName("productSpecs__designDesc")[0]
            let productBattery = document.getElementsByClassName("productSpecs__battery")[0]
            let productPowerSupply = document.getElementsByClassName("productSpecs__powerSupply")[0]
            let productConnectivityTypeUL = document.getElementsByClassName("productSpecs__type")[0]
            let productReviewsArticle = document.getElementsByClassName("productSpecs__reviews")[0]
            let productStock = document.getElementsByClassName("productSpecs__stockAmount")[0]

            let productAmount = document.getElementsByClassName("productDecription__amount")[0]

            //Her første del af URLstring til databasen (til at linke til fx images)
            let localHost3001 = "http://localhost:3001"
            
            //Her er reviewStar som ren svg. Tak Sebastian (download svg > højreklik på svg i browser > undersøg > se svg-koden i 'elements' > højreklik på koden > vælg 'edit as html' > kopier til udklipsholder)
            let starSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'


            //Product description
            productName.innerText = product.name
            productDesc.innerText = product.desc
            productFlavorText.innerText = product.flavor_text
            productPrice.innerText = "£" + product.price

            //specs
            productSoundDesc.innerText = product.specs.sound

            //Herunder forsøger jeg at stifte specs om fra integer til string,
            //så målene kan printes via innertext, men det lykkes kun via innerHTML
            //Ved I hvorfor?
            let heightInt = product.specs.design.height;
            let heightString = heightInt.toString();
            productHeight.innerHTML = "Height: " + heightString + " mm";

            let widthInt = product.specs.design.width;
            let widthString = widthInt.toString();
            productWidth.innerHTML = "Width: " + widthString + " mm";

            let weightInt = product.specs.design.weigth;
            let weightString = weightInt.toString();
            productWeight.innerHTML = "Weight: " + weightString + " g";

            productDesignDesc.innerText = "Design description: " + product.specs.design.design_desc

            productBattery.innerText = "Battery: " + product.specs.connectivity.battery

            productPowerSupply.innerText = "Power supply: " + product.specs.connectivity.power

            let productConnectivityTypes = product.specs.connectivity.type

            console.log("productConnectivityTypes", productConnectivityTypes)

            productConnectivityTypes.forEach(function (element) {
                console.log("huligennem")
                let connectivitytypeLi = document.createElement("li")
                let typeInnerText = document.createTextNode(element)
                connectivitytypeLi.appendChild(typeInnerText)
                connectivitytypeLi.classList.add("productSpecs__connectivityType")
                productConnectivityTypeUL.appendChild(connectivitytypeLi)
                
            })

            let productReviewsArray = product.specs.reviews

            console.log("productReviewsArray", productReviewsArray)

            productReviewsArray.forEach(function (element){
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

                console.log("currentRatingStars", currentRatingStars)

                reviewStarsDiv.innerHTML = currentRatingStars
                
                let reviewRatingP = document.createElement("p")
                reviewRatingP.classList.add("productSpecs__reviewRatingP")
                let reviewRatingPInnerText = document.createTextNode("("+ element.stars +")")
                reviewRatingP.appendChild(reviewRatingPInnerText)
                let reviewRatingDiv = document.createElement("div")
                reviewRatingDiv.appendChild(reviewStarsDiv)
                reviewRatingDiv.appendChild(reviewRatingP)

                let reviewCommentP = document.createElement("p")
                reviewCommentP.classList.add("productSpecs__reviewCommentP")
                let reviewCommentPInnerText = document.createTextNode(element.review_comment)
                reviewCommentP.appendChild(reviewCommentPInnerText)

                let reviewDateP = document.createElement("p")
                reviewDateP.classList.add("productSpecs__reviewDateP")
                let reviewDatePInnerText = document.createTextNode(element.review_date)
                reviewDateP.appendChild(reviewDatePInnerText)


                productReviewsArticle.appendChild(userInfoDiv)
                productReviewsArticle.appendChild(reviewRatingDiv)
                productReviewsArticle.appendChild(reviewCommentP)
                productReviewsArticle.appendChild(reviewDateP)
            })

            productStock.innerText = product.stock

            let productColorsArray = product.colors
            console.log("productColorsArray", productColorsArray)

            let chosenColorCode = ""
            let chosenColorName = ""

            productColorsArray.forEach(function (element){
                let colorPickerWrapper = document.createElement("div")
                colorPickerWrapper.classList.add("productDecription__colorPickerWrapper")
                let colorPicker = document.createElement("div")
                colorPicker.classList.add("productDecription__colorPicker")
                let colorNameP = document.createElement("p")
                colorNameP.classList.add("productDecription__colorNameP")
                let colorCode = element.code
                let colorName = element.name

                colorPicker.style.backgroundColor = colorCode
                colorNameP.innerText = colorName

                colorPickerWrapper.appendChild(colorPicker)
                colorPickerWrapper.appendChild(colorNameP)

                colorPickerDiv.appendChild(colorPickerWrapper) 
                
                colorPickerWrapper.addEventListener("click", (function(){
                    colorPicker.style.border = "3px solid black"
                    //styling
                    chosenColorCode = element.code
                    chosenColorName = element.name
                }))

                console.log("chosenColorName", chosenColorName)



            })

           




            



           

        })
}

function colorPicker(){

}


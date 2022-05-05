
import "../../style/modules/productGallery.scss";
function productGallery(product) {
   // const element = document.createElement('div')
    //element.classList.add('productDescription__productImages')

let thumbnailClick = function(){
    console.log("click")
}
    let element = document.createElement("div")
    element.classList.add("productDescription__productImages")
    element.innerHTML = ` 
    <div class="productDescription__thumbnails">
                    <div class="productDescription__thumbnail" onclick=${thumbnailClick()}><img class="productDescription__thumbnailImg"
                                src=${`http://localhost:3001${product.images[0]}`}
                                alt="klik for at se en stor udgave af dette billede">
                    </div>
                    <div class="productDescription__thumbnail"><img class="productDescription__thumbnailImg"
                                src=${`http://localhost:3001${product.images[1]}`}
                                alt="klik for at se en stor udgave af dette billede">
                    </div>
                    <div class="productDescription__thumbnail"><img class="productDescription__thumbnailImg"
                                src=${`http://localhost:3001${product.images[2]}`}
                                alt="klik for at se en stor udgave af dette billede">
                    </div>
                </div>
                <div class="productImages__productDisplay">
                    <div class="productImages__arrowLeftDiv">
                        <i data-feather="arrow-left-circle"></i>
                    </div>
                    <div class="productImages__currentImageDiv">
                        <a href="#"> <img src=${`http://localhost:3001${product.images[0]}`} alt="Billede af produktet"
                                class="productImages__CurrentImageImg"></a>
                    </div>
                    <div class="productImages__arrowRightDiv">
                        <i data-feather="arrow-right-circle"></i>
                    </div>

                </div>
        
    `

    let dbURL = "http://localhost:3001"
    let currentImage = element.getElementsByClassName("productImages__CurrentImageImg")[0]

    /*const thumbnailAll = document.querySelectorAll(".productDescription__thumbnailImg");

    thumbnailAll.forEach(function (element) {

        element.addEventListener("click", function (event) {

    
            currentImage.setAttribute("src", element.href);
            console.log("imgLink", element.href)
            
        });
    })
    */

    console.log("currentImgSrc", currentImage.src)

    function setSrc(e){
        currentImage.setAttribute("src", e.target.src)
        console.log("changeImg")
    }
    
    element.getElementsByClassName("productDescription__thumbnailImg")[0].addEventListener("click", setSrc)
    

    element.getElementsByClassName("productDescription__thumbnailImg")[1].addEventListener("click", setSrc)

  
    element.getElementsByClassName("productDescription__thumbnailImg")[2].addEventListener("click", setSrc)




    /*pile-funktionalitet herunder - nice to 

    

    element.getElementsByClassName("productImages__arrowLeftDiv")[0].addEventListener("click", function(){

    })

    element.getElementsByClassName("productImages__arrowRightDiv")[0].addEventListener("click", function(){

    })
    */


    
    return element
}
export default productGallery

    
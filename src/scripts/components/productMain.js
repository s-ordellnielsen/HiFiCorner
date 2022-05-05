import productDesc from "./productDesc.js"
import productGallery from "./productGallery.js"
import productHeadline from "./productHeadline.js"
import productDescriptionArticle from "./productDescriptionArticle.js";
import productSpecs from "./productSpecs.js";
import similarProducts from "./similarProducts.js"
import "../../style/base/_variables.scss";
function productMain(id) {

        //creates alle elementer her?

        const element = document.createElement('main')
        element.classList.add('page')

        let sectionProductDescription = document.createElement("section")
        sectionProductDescription.classList.add("productDescription")
        sectionProductDescription.classList.add("standardMargin")

        

        
    
    
    fetch("http://localhost:3001/products/"+id, {
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
    .then(function (product) {

        document.title += "HiFi Corner - " + product.name

        //input:hidden med id som value
        let inputID = document.createElement("input")
        inputID.classList.add("productID")
        inputID.type = "hidden"
        inputID.value = product.id
        console.log("inputID", inputID)
        let productID = inputID.value
        element.appendChild(inputID)


        console.log("productID", productID)
        
        sectionProductDescription.appendChild(productHeadline(product.name))
        sectionProductDescription.appendChild(productGallery(product))
        sectionProductDescription.appendChild(productDescriptionArticle(product))
        element.appendChild(sectionProductDescription)
        element.appendChild(productSpecs(product))
        element.appendChild(similarProducts(product))


        
        

        
        

       
       

    })


    

 
 return element

    

               
            
       
           /*

        <section class="productSpecs standardMargin">
            <div class="productSpecs__lines"></div>
            <article class="productSpecs__soundArticle">
                <div class="productSpecs__specHead">
                    <h3 class="productSpecs__header">Sound</h3>
                    <i data-feather="arrow-down-circle"></i>
                </div>
                <ul class="productSpecs__sound">
                    <li class="productSpecs__soundDesc">

                    </li>

                </ul>
            </article>
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

        </div>


        <section class="similarProducts">
            <h2 class="similarProducts__header">Products like this</h2>
            <div class="similarProducts__images">
                <div class="similarProducts__currentImageDiv">
                    <a href="#"><img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage"></a>
                    <div class="productImagesCurrentImage__disc">
                        <h3>Marshall Mini</h3>
                        <p>49.99€</p>
                    </div>
                </div>
                <div class="similarProducts__currentImageDiv">
                    <a href="#"><img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage"></a>
                    <div class="productImagesCurrentImage__disc">
                        <h3>Marshall Mini</h3>
                        <p>49.99€</p>
                    </div>
                </div>
                <div class="similarProducts__currentImageDiv">
                    <a href="#"><img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage"></a>
                    <div class="productImagesCurrentImage__disc">
                        <h3>Marshall Mini</h3>
                        <p>49.99€</p>
                    </div>
                </div>

            </div>
        </section>

        <script src=""></script>
        <script src=""></script>
        <script>
            feather.replace()
        </script>

    `

    
    return element*/
}


export default productMain
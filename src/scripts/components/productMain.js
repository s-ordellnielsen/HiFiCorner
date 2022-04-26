import productGallery from "./productGallery.js"
import productHeadline from "./productHeadline.js"

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
        
        sectionProductDescription.appendChild(productHeadline(product.name))
        sectionProductDescription.appendChild(productGallery(product))
        
        

       
       

         })
    
element.appendChild(sectionProductDescription)
 
 return element

    

               
               
            
    
    

       
           /* <div class="productDescription__compare">
                <div class="productDescription__compareArrows">
                    <div class="compareArrows__arrowLeftDiv">
                        <i data-feather="arrow-left"></i>
                    </div>
                    <div class="compareArrows__arrowRightDiv">
                        <i data-feather="arrow-right"></i>
                    </div>

                </div>
                <p class="productDescription__compareP">Compare</p>
            </div>

            
            <div class="productDescription__productImages">
                <div class="productDescription__thumbnails">
                    <div class="productDescription__thumbnail"><a href="#"><img class="productDescription__thumbnailImg"
                                src="/images/placeholder_img.jpg"
                                alt="klik for at se en stor udgave af dette billede"></a>
                    </div>
                    <div class="productDescription__thumbnail"><a href="#"><img class="productDescription__thumbnailImg"
                                src="/images/placeholder_img.jpg"
                                alt="klik for at se en stor udgave af dette billede"></a>
                    </div>
                    <div class="productDescription__thumbnail"><a href="#"><img class="productDescription__thumbnailImg"
                                src="/images/placeholder_img.jpg"
                                alt="klik for at se en stor udgave af dette billede"></a>
                    </div>
                </div>
                <div class="productImages__productDisplay">
                    <div class="productImages__arrowLeftDiv">
                        <i data-feather="arrow-left-circle"></i>
                    </div>
                    <div class="productImages__currentImageDiv">
                        <a href="#"> <img src="/images/placeholder_img.jpg" alt="Billede af produktet"
                                class="productImages__CurrentImageImg"></a>
                    </div>
                    <div class="productImages__arrowRightDiv">
                        <i data-feather="arrow-right-circle"></i>
                    </div>

                </div>
            </div>
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



            </article>

        </section>

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


function productGallery(product) {
   // const element = document.createElement('div')
    //element.classList.add('productDescription__productImages')
    let element = `
    <div className="productDescription__productImages">
    <div class="productDescription__thumbnails">
                    <div class="productDescription__thumbnail"><a href="#"><img class="productDescription__thumbnailImg"
                                src=${`http://localhost:3001${product.images[0]}`}
                                alt="klik for at se en stor udgave af dette billede"></a>
                    </div>
                    <div class="productDescription__thumbnail"><a href="#"><img class="productDescription__thumbnailImg"
                                src=${`http://localhost:3001${product.images[1]}`}
                                alt="klik for at se en stor udgave af dette billede"></a>
                    </div>
                    <div class="productDescription__thumbnail"><a href="#"><img class="productDescription__thumbnailImg"
                                src=${`http://localhost:3001${product.images[2]}`}
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
    `

    return element
}
export default productGallery
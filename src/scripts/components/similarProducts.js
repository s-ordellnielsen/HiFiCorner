import "../../style/modules/similarProducts.scss";

function similarProducts(product) {
    const element = document.createElement('section')
    element.classList.add('similarProducts')

    console.log("type", product.type)

    let productType = product.type

    let simProdH2 = document.createElement("h2")
    simProdH2.classList.add("similarProducts__header")
    simProdH2.innerText ="You might also like..."
    element.appendChild(simProdH2)

    let similarProductsImages = document.createElement("div")
    similarProductsImages.classList.add("similarProducts__images")

    let productURL = "http://localhost:4500/product/?id="




    fetch("http://localhost:3001/products?type="+productType+"&_limit=3", {
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
    .then(function (similarProductsArray) {

        console.log("simProd", similarProductsArray)

        similarProductsArray.forEach((element) => {
            let similarProductsCurrentImageDiv = document.createElement("div")
            similarProductsCurrentImageDiv.classList.add("similarProducts__currentImageDiv")

            let productImagesCurrentImageDiv = document.createElement("div")
            productImagesCurrentImageDiv.classList.add("productImagesCurrentImageDiv")

            let productImagesCurrentImageA = document.createElement("a")
            productImagesCurrentImageA.classList.add("productImagesCurrentImageA")
            productImagesCurrentImageA.href = productURL + element.id

            let productImagesCurrentImage = document.createElement("img")
            productImagesCurrentImage.classList.add("productImagesCurrentImage")
            productImagesCurrentImage.setAttribute("src", "http://localhost:3001"+element.images[1])

            productImagesCurrentImageA.appendChild(productImagesCurrentImage)

            productImagesCurrentImageDiv.appendChild(productImagesCurrentImageA)
            

            similarProductsCurrentImageDiv.appendChild(productImagesCurrentImageDiv)

            let productImagesCurrentImageDisc = document.createElement("div")
            productImagesCurrentImageDisc.classList.add("productImagesCurrentImage__disc")

            let productImagesCurrentImageDiscH3 = document.createElement("h3")
            productImagesCurrentImageDiscH3.classList.add("productImagesCurrentImageDiscH3")

            let productImagesCurrentImageDiscH3A = document.createElement("a")
            productImagesCurrentImageDiscH3A.classList.add("productImagesCurrentImageDiscH3A")
            productImagesCurrentImageDiscH3A.href = productURL + element.id
            productImagesCurrentImageDiscH3A.innerText = element.name


            productImagesCurrentImageDiscH3.appendChild(productImagesCurrentImageDiscH3A)
            productImagesCurrentImageDisc.appendChild(productImagesCurrentImageDiscH3)

            let productImagesCurrentImageDiscPrice = document.createElement("p")
            productImagesCurrentImageDiscPrice.classList.add("productImagesCurrentImageDiscPrice")
            productImagesCurrentImageDiscPrice.innerText = "£" + element.price

            productImagesCurrentImageDisc.appendChild(productImagesCurrentImageDiscPrice)


            similarProductsCurrentImageDiv.appendChild(productImagesCurrentImageDisc)


            console.log("simnames", element.name)
            similarProductsImages.appendChild(similarProductsCurrentImageDiv)
        })
        

    
    })

    element.appendChild(similarProductsImages)
    
    return element
}
export default similarProducts


/*
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
        </script>*/
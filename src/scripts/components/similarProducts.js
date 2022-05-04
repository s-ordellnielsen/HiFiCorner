import "../../style/base/_variables.scss";

function similarProducts(product) {
    const element = document.createElement('section')
    element.classList.add('similarProducts')

    console.log("type", product.type)

    let productType = product.type

    let simProdH2 = document.createElement("h2")
    simProdH2.classList.add("similarProducts__header")
    

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
    .then(function (similarProducts) {

        console.log("simProd", similarProducts)

        similarProducts.forEach((element) => {
            document.createElement()
        })

        

        /*let types = []

        db.forEach((product) => {
            
            types = types + product.type + ", "

            types.forEach((typeName, similarTypes) => {
        
                if (typeName == productType){
                    let simdesc = product.desc
                    console.log("simdesc", simdesc)
                }
            })

        })
        console.log("allTypes", types);
        
       

    

        //console.log("slice", types.slice(",")); 

        /*
        if (types == productType){

        }
        */


    })






    /*element.innerHTML = `
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
    
    `
    */
    // Code here
    
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
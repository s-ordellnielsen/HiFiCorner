import '../../style/modules/_standardBtn.scss';


function packagePageList() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    element.innerHTML = `
        
        <section class="packageSectionList">
            
            <label class="packageSectionList__label">
                <p class="packageSectionList__label__name">Connected Speakers - Surround Sound</p>
                <p class="packageSectionList__label__boldMiddleText">Sound in every corner of your home</p>
                <p class="packageSectionList__label__boldBottomText">Surround Sound - Package Deals</p>
            </label>
        </section>
        `
    return element
}

function getProductDetails(id) {
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
            
            //Herunder sammenligner vi id fra databasen på server med id fra querryString
            //Og ud fra den sammenligning kan vi deklarere en product-variabel
            //Slet product = data.find(element => element.id === id)
            
            console.log("found", product)
            
            document.title += " - " + product.name

            let productName = document.getElementsByClassName("productDescription__name")[0]
            let productDesc = document.getElementsByClassName("productDescription__desc")[0]
            let productPrice = document.getElementsByClassName("productDecription__price")[0]
            
            //Her første del af URLstring til databasen (til at linke til fx images)
            let localHost3001 = "http://localhost:3001"
            
            //Her er reviewStar som ren svg. Tak Sebastian (download svg > højreklik på svg i browser > undersøg > se svg-koden i 'elements' > højreklik på koden > vælg 'edit as html' > kopier til udklipsholder)
            let starSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'

            //Product description
            productName.innerText = product.name
            productDesc.innerText = product.desc
            productPrice.innerText = "£" + product.price
        })
}
export default packagePageList
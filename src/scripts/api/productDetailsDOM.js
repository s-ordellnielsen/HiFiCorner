
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
            let productPrice = document.getElementsByClassName("productDecription__price")[0]
            let soundDesc = document.getElementsByClassName("productSpecs__soundDesc")[0]
            let productHeight = document.getElementsByClassName("productSpecs__height")[0]
            let productWidth = document.getElementsByClassName("productSpecs__width")[0]
            let productWeight = document.getElementsByClassName("productSpecs__weight")[0]
            let productDesignDesc = document.getElementsByClassName("productSpecs__designDesc")[0]
            let productBattery = document.getElementsByClassName("productSpecs__battery")[0]
            let productPowerSupply = document.getElementsByClassName("productSpecs__powerSupply")[0]


            //Product description
            productName.innerText = product.name
            productDesc.innerText = product.desc
            productFlavorText.innerText = product.flavor_text
            productPrice.innerText = "£" + product.price

            //specs
            soundDesc.innerText = product.specs.sound

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

            productConnectivityTypes.forEach((element) => {
                let ConnectivitytypeLi = document.createElement(li)
                ConnectivitytypeLi.classlist
            })


            



           

        })
}


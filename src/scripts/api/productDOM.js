
async function getAllProducts() {
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
            console.log(data);
            pList(data);

        })
}
getAllProducts()
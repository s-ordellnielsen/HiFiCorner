
function getAllProducts() {
    return fetch("http://localhost:3001/products")
        .then(function (response) {
            console.log(response);
            if (response.status !== 200) {
                console.log('fejl')
                return []
            }
            return response.json()
        })
        .then(function (data) {
            pList(data.results);
            console.log("her er data");
        })
}

function fetchPackageList() {
    return fetch("http://localhost:3001/packages", {
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


}
export default fetchPackageList

function getURL(){
let queries = new URLSearchParams(window.location.search)


//querryString reterner altid en string, derfor laver vi et parseInt, så vi får en interger i id)
let id = parseInt(queries.get("id"))
console.log(id);

if (!id){
     return "fejl"
} else {
    return id
}

}

export default getURL



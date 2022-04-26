//Funktion der sletter den tablerow som er grand parent til
//den knap vi har trykket på. 
//Knappen selv bliver passet til funktionen og hedder: "that".
//Funktionen bliver kaldt fordi vi har sat en onclick attribut på
//knappen når koden bliver generet. 
//Grunden til at vi bruger onclick-attribut og IKKE addEventlistener("click") fordi vi skal
//gemme al HTML koden i tekst-strengs-format i localStorrage.
//____________
//I denne funktion behøver vi ikke checke om der er noget i localStorrage
//Det ved vi der er, forr funktionen bliver jo kaldt fra en knap loadet fra
//localStorrage
//____________


function deleteRow(that) {

    //Opdater antal varer i kurv
    let currentAmount = localStorage.getItem("cartAmount");
    let substractFromCArt = that.parentElement.parentElement.firstChild.innerHTML;
    localStorage.setItem("cartAmount", parseInt(currentAmount) - parseInt(substractFromCArt));

    //Opdater ordrens total
    let oldTotal = localStorage.getItem("orderTotal");
    let substractFromTotal = that.parentElement.parentElement.childNodes[4].innerHTML;
    localStorage.setItem("orderTotal", parseInt(oldTotal) - parseInt(substractFromTotal));

    //Slet <tr> bedsteforældren og opdater hele html tabellen i local storage 
    that.parentElement.parentElement.remove();
    localStorage.setItem("cartTable", cartHtmlElement.innerHTML);
}

let urlString = window.location.href;
let urlObject = new URL(urlString);

//url parametre -de kommer fra formens name attributter på produktsiden
let orderAmount = urlObject.searchParams.get("product-amount");
let orderSku = urlObject.searchParams.get("product-sku");
let orderColor = urlObject.searchParams.get("product-color");
let orderSize = urlObject.searchParams.get("product-size");
let orderPrice = urlObject.searchParams.get("product-price-hidden");

//Eksisterende HTML element
let cartHtmlElement = document.querySelector("#cart-entries");

//Hvis der er noget i localStorage, så putter vi det 
//ind i tabellen på siden
if (localStorage.getItem("cartTable")) {
    cartHtmlElement.innerHTML = localStorage.getItem("cartTable");
}

//Hvis der er sat url-parametre ( = der er lagt en vare i kurven)
//Så laver vi et <tr> element og en masse <td> elementer med info
//og en knap til at slette
if (urlObject.searchParams.get("product-amount")) {
    //vores <tr> element laves
    let tableRow = document.createElement("tr");


    //Vores første <td> er antal
    let td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(orderAmount));

    //Den næste <td> er vare id med et link til produktet
    let td2 = document.createElement("td");
    let productLink = document.createElement("a");
    productLink.setAttribute("href", "produkt.html?id=" + orderSku);
    productLink.style.color = "gold";
    productLink.appendChild(document.createTextNode(orderSku));
    td2.appendChild(productLink);

    //Så kommer to <td> med valgt farve og størrelse 
    let td3 = document.createElement("td");
    td3.appendChild(document.createTextNode(orderColor));

    let td4 = document.createElement("td");
    td4.appendChild(document.createTextNode(orderSize));

    //<td> med pris.
    //Bemærk at delete funktionen benytter childNodes[4]
    //Dette er lidt amatør agtigt men gør det vigtigt at denne td altid
    //kommer som nr. 5 i hver række 
    let td5 = document.createElement("td");
    td5.appendChild(document.createTextNode(orderAmount * orderPrice));

    //Sidste table-cell indeholder en slet-knap
    //Bemærk onclick - som kalder slette funktionen - adEventListener vil
    //ikke virke så snart HTML er konverteret til string og loadet fra LS
    let td6 = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "x";
    deleteBtn.setAttribute("title", "Fjern fra kurv");
    deleteBtn.setAttribute("onclick", "deleteRow(this)");
    td6.appendChild(deleteBtn);

    //Alle vores <td> smides ind i vores <tr>
    tableRow.appendChild(td1);
    tableRow.appendChild(td2);
    tableRow.appendChild(td3);
    tableRow.appendChild(td4);
    tableRow.appendChild(td5);
    tableRow.appendChild(td6);

    //Endelig kan vi sætte hele rækken ind i tabellen på html siden
    cartHtmlElement.appendChild(tableRow);
    //Og gemme hele tabellens indhold i LS
    localStorage.setItem("cartTable", cartHtmlElement.innerHTML);

    //Opdatering af samlede antal varer i kurv
    let cartAmount = 0;
    if (localStorage.getItem("cartAmount")) {
        cartAmount = localStorage.getItem("cartAmount")
    }
    //vi adderer nye køb til eksisterende
    localStorage.setItem("cartAmount", parseInt(cartAmount) + parseInt(orderAmount));

    //Beregning af kurvens total
    if (localStorage.getItem("orderTotal")) {
        let currentTotal = localStorage.getItem("orderTotal");
        localStorage.setItem("orderTotal", parseInt(currentTotal) + parseInt(orderAmount * orderPrice));
    }
    else {
        localStorage.setItem("orderTotal", orderAmount * orderPrice);
    }

    //Vi refresher siden uden parametre i url. Så kurven ikke får dubletter
    //hvis brugeren opdaterer siden
    //window.location.href = "cart.html";
}

//Hent total fr LS og sæt det ind i total tabel rækken
document.querySelector("#td-cart-total").innerHTML = localStorage.getItem("orderTotal") + " DKK";

//SHOP VIDERE
let keepShopping = document.querySelector("#keep-shopping");

keepShopping.addEventListener("click", function () {
    //window.location.href = "index.html";
    window.history.go(-2);
})
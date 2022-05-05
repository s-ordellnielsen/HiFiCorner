import heroProduct from "./getHeroProduct.js";
import landingImg from '../../../images/landing-img.png';
function heroDom() {
    const element = document.createElement("article")
    element.classList.add("landing__heroProduct")
    heroProduct()
        .then(products => {
            const first = products[17]
            element.innerHTML = `
                <h2 class="landing__heroProductBody">Marshall Mini</h2>
                <div class="">
            <img class="landing__heroProductImage" src="${landingImg}" alt="Marshall mini, landing page">
            <a class="landing__heroProductLink standardBtn btn" href="http://localhost:3000/product/?id=12359">See More</a>
        </div>    
            `
        })
    return element
}

export default heroDom
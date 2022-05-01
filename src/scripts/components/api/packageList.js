import fetchPackagelist from './fetchPackagelist.js';


function packageList() {
    const element = document.createElement('section');
    element.classList.add('packageSectionList', 'wrapper');

    fetchPackagelist()
        .then(itemPackages => {
            itemPackages.forEach(itemPackage => {
                const article = document.createElement('article');
                article.classList.add('packageSectionList__article')
                article.innerHTML = `
        <div class="packageSectionList__container">
        <a class="packageSectionList__aTag" href="cart.html">
            <img class="packageSectionList__img" src="http://localhost:3001${itemPackage.images[0]}">
            <div>
                <h2 class="landing__heroProductBody">${itemPackage.name}</h2>
                <p>${itemPackage.flavor_text}</p>
                <span>${itemPackage.price}£</span>
                <a class="packageSectionList__seeMoreBtn standardBtn btn"href="./packages?=id${element.id}">See more</a>
            </div>
        </a>
        </div>
        `
                element.appendChild(article)
            })
        })
    return element;
}
export default packageList
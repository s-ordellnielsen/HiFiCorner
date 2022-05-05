import '../../style/modules/_standardBtn.scss';


import packageIcon from '../../images/packageIcon.png';
import ratings from '../../images/ratings.png';

function packagePageBanner() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    element.innerHTML = `
        <h1 class="packageSectionBanner__header">Package Deals</h1>
        <section class="packageSectionBanner">
            <img class="packageSectionBanner__img" src="${packageIcon}" alt="Package Banner"/>
            <aside class="packageSectionBanner__aside">
                <p class="packageSectionBanner__aside__boldTopText">Connected Speakers - Surround Sound</p>
                <p class="packageSectionBanner__aside__boldMiddleText">Sound in every corner of your home</p>
                <p class="packageSectionBanner__aside__boldBottomText">Surround Sound - Package Deals</p>
            </aside>
        </section>
        <div class="packageSectionBanner__ratingsContainer">
            <img class="packageSectionBanner__ratings" src="${ratings}" alt="Ratings from Customers" />
        </div>

        `

    return element
}


export default packagePageBanner

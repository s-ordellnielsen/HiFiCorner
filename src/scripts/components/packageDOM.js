import '../../style/layout/_package.scss';
import packageIcon from '../../images/packageIcon.png';

function packagePageBanner() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    element.innerHTML = `
        <h1 class="packageSection__header">Package Deals</h1>
        <section class="packageSection">
            <img class="packageSection__img" src="${packageIcon}" alt="" />
            <aside class="packageSection__aside">
                <p class="packageSection__aside__boldTopText">Connected Speakers - Surround Sound</p>
                <p class="packageSection__aside__boldMiddleText">Sound in every corner of your home</p>
                <p class="packageSection__aside__boldBottomText">Surround Sound - Package Deals</p>
            </aside>
        </section>
        <section class="packageSection__slider">

        </section>

        `

    return element
}
export default packagePageBanner
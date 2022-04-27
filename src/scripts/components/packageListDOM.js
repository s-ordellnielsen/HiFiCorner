import '../../style/modules/_standardBtn.scss';


function packagePageList() {
    const element = document.createElement('div')
    element.classList.add('wrapper')
    
    element.innerHTML = `
        <h1 class="packageSectionBanner__header">Package Deals</h1>
        <section class="packageSectionBanner">
            
            <aside class="packageSectionBanner__aside">
                <p class="packageSectionBanner__aside__boldTopText">Connected Speakers - Surround Sound</p>
                <p class="packageSectionBanner__aside__boldMiddleText">Sound in every corner of your home</p>
                <p class="packageSectionBanner__aside__boldBottomText">Surround Sound - Package Deals</p>
            </aside>
        </section>

        `
    
    return element
}
export default packagePageList
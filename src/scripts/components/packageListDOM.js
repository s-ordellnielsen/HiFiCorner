import '../../style/modules/_standardBtn.scss';


function packagePageList() {
    const element = document.createElement('div')
    element.classList.add('wrapper')

    element.innerHTML = `
        
        <section class="packageSectionList">
            
            <label class="packageSectionList__label">
                <p class="packageSectionList__label__name">Connected Speakers - Surround Sound</p>
                <p class="packageSectionList__label__boldMiddleText">Sound in every corner of your home</p>
                <p class="packageSectionList__label__boldBottomText">Surround Sound - Package Deals</p>
            </label>
        </section>

        `

    return element
}
export default packagePageList
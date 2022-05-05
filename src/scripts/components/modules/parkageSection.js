// import "../../style/modules/parkageSection.scss"

export default function packageSection() {
    const element = document.createElement('section')
    element.classList.add('landing__package')
    element.innerHTML = `

<img class="landing__parkageImage" src="/images/connected-speakers.png" alt="">
    <article class="landing__parkageArticle">
        <p class="landing__parkageArticleOvertext">Connected Speakers<br> -<br> Surround Sound</p>
            <h1 class="landing__parkageArticleMidtext">Sound in every corner of your home</h1>
            <p class="landing__parkageArticleBottomtext">Surround Sound<br> -<br> Package Deals
            </p>
                <a class="landing__parkageArticleButtonlink" href="/package">Show More</a>
            </article>
        `
    return element
}

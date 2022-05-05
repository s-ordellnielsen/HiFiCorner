import "../../../style/modules/_brandsSection.scss"

function brandSection() {
    const element = document.createElement("section")
    element.classList.add("landing__brands")
    element.innerHTML = `
            <article class="landing__brandsTextSection">
                <h2>Only the best is good enough</h2>
                <p>Check our wide range of premium brands</p>
            </article>
            <article class="landing__brandsIconSection">
                <div class="brandsContainers">
                    <div class="brandsContainers__brandIcon">
                        <a href="/categories/?brand=creek" class="brandsContainers__brandLink"><img
                                class="brandsContainers__brandImage" src="../images/creek-logo.png" alt=""></a>
                    </div>
                    <span class="brandsContainers__brandText">Creek</span>
                </div>
                <div class="brandsContainers">
                    <div class="brandsContainers__brandIcon">
                        <a href="/categories/?brand=parasound" class="brandsContainers__brandLink"><img
                                class="brandsContainers__brandImage" src="../images/parasound-logo.png" alt=""></a>
                    </div>
                    <span class="brandsContainers__brandText">Parasound</span>
                </div>
                <div class="brandsContainers">
                    <div class="brandsContainers__brandIcon">
                        <a href="/categories/?brand=manley" class="brandsContainers__brandLink"><img
                                class="brandsContainers__brandImage" src="../images/manley-logo.png" alt=""></a>
                    </div>
                    <span class="brandsContainers__brandText">Manley</span>
                </div>
                <div class="brandsContainers">
                    <div class="brandsContainers__brandIcon">
                        <a href="/categories/?brand=project" class="brandsContainers__brandLink"><img
                                class="brandsContainers__brandImage" src="../images/project-logo.png" alt=""></a>
                    </div>
                    <span class="brandsContainers__brandText">Project</span>
                </div>
                <div class="brandsContainers">
                    <div class="brandsContainers__brandIcon">
                        <a href="/categories/?brand=obj" class="brandsContainers__brandLink"><img
                                class="brandsContainers__brandImage" src="../images/creek-logo.png" alt=""></a>
                    </div>
                    <span class="brandsContainers__brandText">OBJ</span>
                </div>
                <div class="brandsContainers">
                    <div class="brandsContainers__brandIcon">
                        <a href="/categories/?brand=jolida" class="brandsContainers__brandLink"><img
                                class="brandsContainers__brandImage" src="../images/jolida-logo.png" alt=""></a>
                    </div>
                    <span class="brandsContainers__brandText">Jolada</span>
                </div>
                <div class="brandsContainers">
                    <div class="brandsContainers__brandIcon">
                        <a href="/categories/?brand=bangOlufson" class="brandsContainers__brandLink"><img
                                class="brandsContainers__brandImage" src="../images/bangNolufsen-logo.png" alt=""></a>
                    </div>
                    <span class="brandsContainers__brandText">Bang & Olufson</span>
                </div>
                <div class="brandsContainers">
                    <div class="brandsContainers__brandIcon">
                        <a href="/categories/?brand=creek" class="brandsContainers__brandLink"><img
                                class="brandsContainers__brandImage" src="../images/creek-logo.png" alt=""></a>
                    </div>
                    <span class="brandsContainers__brandText">Creek</span>
                </div>
            </article>
`
    return element;
}

export default brandSection
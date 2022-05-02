
import "../../style/style.scss"
import "../../style/modules/_newsLetterSection.scss"

export default function newsLetter() {
    const element = document.createElement('section')
    element.classList.add('landing__newsLetter')
    element.innerHTML = `
    <article class="landing__newsLetterArticle">
                <h1>You want 10% discount on your next order?</h1>
                <p>Subscribe to the Newsletter of HiFiCorner. Receive News and Inspiration</p>
            </article>
            <form class="landing__newsLetterForm">
                <input type="email" name="" class="landing__newsLetterFormInputField" id="landing__newsLetterFormInputField">
                <div class="newsLetter__formTextBox">
                    <span class="landing__newsLetterFormDesktopText"></span>
                    <p class=""></p>
                </div>
                <div class="landing__newsLetterFormRadCheckbox">
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Creek</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Parasound</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Manley </div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Project</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">OBJ</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Jolada</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Bang & Olufson</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Creek</div>
                    </label>
                </div>
                <div class="landing__newsLetterFormRadCheckboxMore">
                    <div>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Creek</div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Parasound</div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Manley </div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Project</div>
                        </label>
                    </div>
                    <div>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">OBJ</div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Jolada</div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Bang & Olufson</div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Creek </div>
                        </label>
                    </div>
                </div>
            </form>
    `

    return element;
}
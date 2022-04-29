
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
                <input type="email" name="" id="">
                <div class="newsLetter__formTextBox">
                    <span class="newsLetter__formDesktopText"></span>
                    <p class=""></p>
                </div>
                <div class="newsLetter__radCheckbox">
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Bowers & Wilkins</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Bosé</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Harman/kardon </div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">JBL</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">Klipsch</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">KEF</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">FOCAL</div>
                    </label>
                    <label class="rad-label">
                        <input type="checkbox" class="rad-input" name="rad">
                        <div class="rad-design"></div>
                        <div class="rad-text">B&O</div>
                    </label>
                </div>
                <div class="newsLetter__radCheckboxMore">
                    <div>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Bowers & Wilkins</div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Bosé</div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Harman/kardon </div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">JBL</div>
                        </label>
                    </div>
                    <div>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">Klipsch</div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">KEF</div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">FOCAL</div>
                        </label>
                        <label class="rad-label">
                            <input type="checkbox" class="rad-input" name="rad">
                            <div class="rad-design"></div>
                            <div class="rad-text">B&O</div>
                        </label>
                    </div>
                </div>
            </form>
    `

    return element;
}
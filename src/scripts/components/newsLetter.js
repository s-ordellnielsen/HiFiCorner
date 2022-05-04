import "../../style/style.scss"
import "../../style/modules/_newsLetterSection.scss"

import ratings from '../../images/ratings.png';
export default function newsLetter() {
    const element = document.createElement('section')
    element.classList.add('landing__newsLetter')
    element.innerHTML = `
    
    <section class="landing__newsLetterSection">
        <article class="landing__newsLetterSection__article">
                <h1 class="landing__newsLetterSection__header">You want 10% discount on your next order?</h1>
                <p class="landing__newsLetterSection__text">Subscribe to the Newsletter of HiFiCorner. Receive News and Inspiration</p>
                </article>
                <div class="packageSectionBanner__ratingsContainer">
            <img class="packageSectionBanner__ratings" src="${ratings}" alt="Ratings from Customers" />
        </div>
            <form class="landing__newsLetterForm">
                <div class="landing__newsLetterFormInput">
                    <h1 class="landing__newsLetterForm__header">Write your Email</h1>
                    <input type="email" name="" class="landing__newsLetterFormInputField" id="landing__newsLetterFormInputField">
                    <p class="landing__newsLetterForm__text">Whats your preferences? <br> Choose your options:</p>
                </div>
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
                    <p class="landing__newsLetterForm__moreText">More alternatives? <br> Choose your options:</p>
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
        </article>
        </section>
    `

    return element;
}

import "../../style/style.scss"
import "../../style/modules/_newsLetterSection.scss"
import "../../style/layout/_package.scss"
import "../../style/modules/_standardBtn.scss"
import ratings from '../../images/ratings.png';

export default function newsLetter() {
    const element = document.createElement('section')
    element.classList.add('landing__newsLetter')
    element.innerHTML = `
    
    <section class="landing__newsLetterSection">
        <article class="landing__newsLetterSection__article">
                <h1 class="landing__newsLetterSection__header">You want 10% discount on your next order?</h1>
                <p class="landing__newsLetterSection__text">Subscribe to the Newsletter of HiFiCorner. Receive News and Inspiration</p>
                <div class="packageSectionBanner__ratingsContainerOnLanding">
            <img class="packageSectionBanner__ratingsOnLanding" src="${ratings}" alt="Ratings from Customers" />
        </div>
                </article>
                
            <form class="landing__newsLetterForm">
                <div class="landing__newsLetterFormInput">
                    <h1 class="landing__newsLetterForm__header">Write your Email</h1>
                    <input type="email" name="" class="landing__newsLetterFormInputField" id="landing__newsLetterFormInputField">
                    <p class="landing__newsLetterForm__text">Whats your preferences? <br> Choose your options:</p>
                    <div class="landing__newsLetterForm__textBox">
                        <p class="landing__newsLetterForm__textBoxMore">Sign up for the newsletter and get 10% off</p>

                    
                </div>
                </div>
                
                <div class="landing__newsLetterFormRadCheckbox">
                    <div class="rad-label-container">
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
                    <p class="landing__newsLetterForm__moreText">More alternatives? <br> Choose your options:</p>
                </div>
                
                <div class="landing__newsLetterFormRadCheckboxMore">
                    <div class="">
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
                        <input type="submit"  name="InputBtn" class="landing__newsLetterFormInputBtn standardBtn" id="landing__newsLetterFormInputBtn">
                    </div>
                    
                </div>
            </form>
        </article>
        </section>
    `

    return element;
}

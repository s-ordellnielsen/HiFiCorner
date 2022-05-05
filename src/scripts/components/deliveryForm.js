import '../../style/modules/deliveryForm.scss'
import upsLogo from '../../images/deliveryOptions/UPS-logo.png'
import fedExLogo from '../../images/deliveryOptions/FedEx-logo.png'
import royalMailLogo from '../../images/deliveryOptions/Royal-Mail-Logo.png'
import woltLogo from '../../images/deliveryOptions/wolt-logo.png'
import deliveryFormvalidator from './deliveryFormvalidator.js'
import feather from 'feather-icons'

import '../../style/modules/deliveryOption.scss'

export default function deliveryForm() {
	let element = document.createElement('form')
	element.classList.add('deliveryForm')

	element.innerHTML = `
		<div class="deliveryForm__inputRow">
			<label class="deliveryForm__label">
				<span class="deliveryForm__labelText">First name</span>
				<input type="text" placeholder="Pete" id="delivery__firstNameInput" class="deliveryForm__input"/>
				<span class="deliveryForm__error"></span>
			</label>
			<label class="deliveryForm__label">
				<span class="deliveryForm__labelText">Last name</span>
				<input type="text" placeholder="Davidson" id="delivery__lastNameInput" class="deliveryForm__input"/>
				<span class="deliveryForm__error"></span>
			</label>
		</div>
		<div class="deliveryForm__inputRow">
			<label class="deliveryForm__label">
				<span class="deliveryForm__labelText">Street</span>
				<input type="text" placeholder="12 Oxford Street" id="delivery__streetInput" class="deliveryForm__input"/>
				<span class="deliveryForm__error"></span>
			</label>
			<label class="deliveryForm__label">
				<span class="deliveryForm__labelText">Zip-code</span>
				<input type="text" placeholder="WA1D 1BS" id="delivery__zipInput" class="deliveryForm__input"/>
				<span class="deliveryForm__error"></span>
			</label>
		</div>

		<section class="deliveryOptions">
			<label class="deliveryOption">
				<div class="deliveryOption__logo">
					<img src="${upsLogo}" alt="" class="deliveryOption__logoBlur"/>
					<img src="${upsLogo}" alt="" class="deliveryOption__logoImage"/>
				</div>
				<h4 class="deliveryOption__name">UPS Express</h4>
				<p class="deliveryOption__duration">1-day delivery</p>
				<p class="deliveryOption__price">€14.99</p>
				<input type="radio" name="dOptions" id="ups" class="deliveryOption__radio"/>
				<div class="deliveryOption__button">
					Use UPS
					<div>${feather.icons.check.toSvg()}</div>
				</div>
			</label>
			<label class="deliveryOption">
				<div class="deliveryOption__logo">
					<img src="${fedExLogo}" alt="" class="deliveryOption__logoBlur"/>
					<img src="${fedExLogo}" alt="" class="deliveryOption__logoImage" />
				</div>
				<h4 class="deliveryOption__name">FedEx</h4>
				<p class="deliveryOption__duration">1-2 days</p>
				<p class="deliveryOption__price">€3.99</p>
				<input type="radio" name="dOptions" id="fe" class="deliveryOption__radio"/>
				<div class="deliveryOption__button">
					Use FedEx
					<div>${feather.icons.check.toSvg()}</div>
				</div>
			</label>
			<label class="deliveryOption">
				<div class="deliveryOption__logo">
					<img src="${royalMailLogo}" alt="" class="deliveryOption__logoBlur" />
					<img src="${royalMailLogo}" alt="" class="deliveryOption__logoImage" />
				</div>
				<h4 class="deliveryOption__name">Royal Mail</h4>
				<p class="deliveryOption__duration">1-5 days</p>
				<p class="deliveryOption__price">Free</p>
				<input type="radio" name="dOptions" id="rm" class="deliveryOption__radio"/>
				<div class="deliveryOption__button">
					Use Royal Mail
					<div>${feather.icons.check.toSvg()}</div>
				</div>
			</label>
			<label class="deliveryOption">
				<div class="deliveryOption__logo">
					<span>${feather.icons.heart.toSvg()} Green Delivery!</span>
					<img src="${woltLogo}" alt="" class="deliveryOption__logoBlur deliveryOption__logoBlur--wolt"/>
					<img src="${woltLogo}" alt="" class="deliveryOption__logoImage deliveryOption__logoImage--wolt"/>
				</div>
				<h4 class="deliveryOption__name">Wolt Bike</h4>
				<p class="deliveryOption__duration">10-15 days</p>
				<p class="deliveryOption__price">€1.99</p>
				<input type="radio" name="dOptions" id="wolt" class="deliveryOption__radio"/>
				<div class="deliveryOption__button">
					Use Wolt Bike
					<div>${feather.icons.check.toSvg()}</div>
				</div>
			</label>
		</section>

		<div class="delivery__submit">
			<p class="delivery__error">Please pick a courier</p>
			<button class="delivery__button">Go to checkout ${feather.icons['credit-card'].toSvg()}</button>
		</div>
	`

	element.querySelector('.deliveryOptions').addEventListener('click', function (e) {
		if (e.target.classList.contains('deliveryOption')) {
			element.querySelectorAll('.deliveryOption').forEach(function (elm) {
				elm.classList.remove('deliveryOption--checked')
			})
			e.target.closest('label').classList.add('deliveryOption--checked')
		}
	})

	element.addEventListener('submit', deliveryFormvalidator)

	return element
}
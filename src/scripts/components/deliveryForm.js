import '../../style/modules/deliveryForm.scss'
import upsLogo from '../../images/deliveryOptions/UPS-logo.png'
import fedExLogo from '../../images/deliveryOptions/FedEx-logo.png'
import royalMailLogo from '../../images/deliveryOptions/Royal-Mail-Logo.png'
import woltLogo from '../../images/deliveryOptions/wolt-logo.png'
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
			</label>
			<label class="deliveryForm__label">
				<span class="deliveryForm__labelText">Last name</span>
				<input type="text" placeholder="Davidson" id="delivery__lastNameInput" class="deliveryForm__input"/>
			</label>
		</div>
		<div class="deliveryForm__inputRow">
			<label class="deliveryForm__label">
				<span class="deliveryForm__labelText">Street</span>
				<input type="text" placeholder="Oxford Street 1" id="delivery__streetInput" class="deliveryForm__input"/>
			</label>
			<label class="deliveryForm__label">
				<span class="deliveryForm__labelText">Zip-code</span>
				<input type="text" placeholder="W1D 1BS" id="delivery__zipInput" class="deliveryForm__input"/>
			</label>
		</div>

		<section class="deliveryOptions">
			<article class="deliveryOption">
				<div class="deliveryOption__logo">
					<img src="${upsLogo}" alt="" class="deliveryOption__logoBlur"/>
					<img src="${upsLogo}" alt="" class="deliveryOption__logoImage"/>
				</div>
				<h4 class="deliveryOption__name">UPS Express</h4>
				<p class="deliveryOption__duration">1-day delivery</p>
				<p class="deliveryOption__price">€14.99</p>
				<button class="deliveryOption__submit">Use UPS ${feather.icons['arrow-right'].toSvg()}</button>
			</article>
			<article class="deliveryOption">
				<div class="deliveryOption__logo">
					<img src="${fedExLogo}" alt="" class="deliveryOption__logoBlur"/>
					<img src="${fedExLogo}" alt="" class="deliveryOption__logoImage" />
				</div>
				<h4 class="deliveryOption__name">FedEx</h4>
				<p class="deliveryOption__duration">1-2 days</p>
				<p class="deliveryOption__price">€3.99</p>
				<button class="deliveryOption__submit">Use FedEx ${feather.icons['arrow-right'].toSvg()}</button>
			</article>
			<article class="deliveryOption">
				<div class="deliveryOption__logo">
					<img src="${royalMailLogo}" alt="" class="deliveryOption__logoBlur" />
					<img src="${royalMailLogo}" alt="" class="deliveryOption__logoImage" />
				</div>
				<h4 class="deliveryOption__name">Royal Mail</h4>
				<p class="deliveryOption__duration">1-5 days</p>
				<p class="deliveryOption__price">Free</p>
				<button class="deliveryOption__submit">Use Royal Mail ${feather.icons['arrow-right'].toSvg()}</button>
			</article>
			<article class="deliveryOption">
				<div class="deliveryOption__logo">
					<span>${feather.icons.heart.toSvg()} Green Delivery!</span>
					<img src="${woltLogo}" alt="" class="deliveryOption__logoBlur deliveryOption__logoBlur--wolt"/>
					<img src="${woltLogo}" alt="" class="deliveryOption__logoImage deliveryOption__logoImage--wolt"/>
				</div>
				<h4 class="deliveryOption__name">Wolt Bike</h4>
				<p class="deliveryOption__duration">10-15 days</p>
				<p class="deliveryOption__price">€1.99</p>
				<button class="deliveryOption__submit">Use Wolt Bike ${feather.icons['arrow-right'].toSvg()}</button>
			</article>
		</section>
	`

	return element
}
import logo from '../../images/logo-large-primary.svg'
import stripeLogo from '../../images/stripe.svg'
import visaLogo from '../../images/visa.svg'
import mastercardLogo from '../../images/mastercard.svg'
import applepayLogo from '../../images/apple-pay.svg'
import paypalLogo from '../../images/paypal.svg'
import feather from 'feather-icons'
import '../../style/modules/pageFooter.scss'
import "../../style/base/_variables.scss";
export default function footerElement() {
	let element = document.createElement('footer')
	element.classList.add('pageFooter')

	element.innerHTML = `
		<section class="pageFooter__col">
			<img class="pageFooter__logo" src="${logo}" alt="HiFi Corners logo in primary color">

			<blockquote class="pageFooter__quote">
				English design.<br>Sound of another world.
				<span>– Mike Kyed</span>
			</blockquote>

			<article class="pageFooter__paymentMethods">
				<img src="${stripeLogo}" alt="">
				<img src="${visaLogo}" alt="">
				<img src="${mastercardLogo}" alt="">
				<img src="${applepayLogo}" alt="">
				<img src="${paypalLogo}" alt="">
			</article>

			<small class="pageFooter__copyrights">
				Copyright © HiFi Corner Ltd. All rights reserved <br>
				Designed and developed by HiFi Corner Gruppe #A
			</small>
		</section>
		<section class="pageFooter__col">
			<ul class="pageFooter__links">
				<li>
					<a href="./categories.html">Categories</a>
					<ul>
						<li><a href="./categories.html">Speakers</a></li>
						<li><a href="./categories.html">Headphones</a></li>
						<li><a href="./categories.html">Accessories</a></li>
					</ul>
				</li>
				<li>
					<a href="./news.html">News</a>
					<ul>
						<li><a href="./news.html">Newsroom</a></li>
						<li><a href="./news-article.html">Latest issue</a></li>
					</ul>
				</li>
				<li>
					<a href="./about.html">About Us</a>
					<ul>
						<li><a href="./about.html">Our Story</a></li>
						<li><a href="./about.html">Leadership</a></li>
						<li><a href="./about.html">Career Opportunities</a></li>
						<li><a href="./about.html">Investors</a></li>
					</ul>
				</li>
				<li>
					<a href="./support.html">Support</a>
					<ul>
						<li><a href="./support.html">Customer Service</a></li>
						<li><a href="./support.html">Installation</a></li>
						<li><a href="./support.html">Solutions</a></li>
						<li><a href="./support.html">How to's</a></li>
						<li><a href="./support.html">Contact Us</a></li>
					</ul>
				</li>
			</ul>
		</section>
		<section class="pageFooter__col">
			<p>Subscribe to our newsletter</p>
			<form class="pageFooter__form" novalidate>
				<input type="email" name="footerSub" id="footerSub">
				<button>Subscribe</button>
				<span class="pageFooter__errorMessage">Please enter a valid email</span>
			</form>
			<h3>Follow us on social media</h3>
			<article class="pageFooter__soMe">
				<a href="https://www.instagram.com/hifi_corner/">
					${feather.icons.instagram.toSvg()}
				</a>
				<a href="https://www.facebook.com/HiFiCorner/">
					${feather.icons.facebook.toSvg()}
				</a>
				<a href="https://twitter.com/hifi_corner">
					${feather.icons.twitter.toSvg()}
				</a>
				<a href="https://www.youtube.com/channel/UCY21Dx3ibHem-kL3G0hmOmQ">
					${feather.icons.youtube.toSvg()}
				</a>
			</article>
		</section>
	`

	let pageFooterForm = element.querySelector('.pageFooter__form')

	pageFooterForm.addEventListener('submit', function(event) {
		event.preventDefault()

		let footerTest = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(element.querySelector('#footerSub').value)

		let errorMessage = element.querySelector('.pageFooter__errorMessage')

		if (!footerTest) {
			errorMessage.classList.add('false')

			setTimeout(() => {
				errorMessage.classList.remove('false')
			}, 5000)
		}
		else {
			errorMessage.innerHTML = 'Thank you. You are now subscribed'

			errorMessage.classList.add('false')

			setTimeout(() => {
				errorMessage.classList.remove('false')
			}, 10000)
		}
	})

	return element
}
import feather from "feather-icons";
import '../../style/modules/_themeToggle.scss'

export default function themeToggle() {
	const element = document.createElement('div')
	element.classList.add('themeToggle')
	
	element.innerHTML = `
		<input type="checkbox" name="themeToggle" id="themeToggle" class="themeToggle__input" />
		<label for="themeToggle" class="themeToggle__icon">
			<div class="themeToggle__icon--light">
				<div class="themeToggle__icon--light__circle"></div>
				<div class="themeToggle__icon--light__line themeToggle__icon--light__line--1"></div>
				<div class="themeToggle__icon--light__line themeToggle__icon--light__line--2"></div>
				<div class="themeToggle__icon--light__line themeToggle__icon--light__line--3"></div>
				<div class="themeToggle__icon--light__line themeToggle__icon--light__line--4"></div>
				<div class="themeToggle__icon--light__line themeToggle__icon--light__line--5"></div>
				<div class="themeToggle__icon--light__line themeToggle__icon--light__line--6"></div>
				<div class="themeToggle__icon--light__line themeToggle__icon--light__line--7"></div>
				<div class="themeToggle__icon--light__line themeToggle__icon--light__line--8"></div>
			</div>
			${feather.icons.moon.toSvg( {class : 'themeToggle__icon--dark'} )}
		</label>
	`

	element.querySelector('#themeToggle').addEventListener('change', function() {
		if (this.checked) {
			document.documentElement.setAttribute('data-theme', 'dark')
		}
		else {
			document.documentElement.setAttribute('data-theme', 'light')
		}
	})

	return element
}
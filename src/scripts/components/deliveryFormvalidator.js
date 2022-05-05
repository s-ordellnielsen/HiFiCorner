import feather from "feather-icons"

export default function deliveryFormvalidator(event) {
	event.preventDefault()
	let valid = true

	function validator(elm, test, message) {
		let testing = test.test(elm.value)

		if (!testing) {
			valid = false
			elm.parentElement.querySelector('.deliveryForm__error').innerHTML = message
			elm.parentElement.classList.add('error')

			elm.addEventListener('input', function(e) {
				let newTest = test.test(elm.value)
				
				if (newTest) {
					elm.parentElement.classList.remove('error')
				}
				else {
					elm.parentElement.classList.add('error')
				}
			})
		}
	}

	let inputs = document.querySelectorAll('.deliveryForm__input')

	let tests = [
		/\D+/,
		/\D+/,
		/\d+\s\D+/,
		/^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i
	]

	let messages = [
		`${feather.icons['alert-triangle'].toSvg()} Please enter a valid first name`,
		`${feather.icons['alert-triangle'].toSvg()} Please enter a valid last name`,
		`${feather.icons['alert-triangle'].toSvg()} Please enter a valid street address`,
		`${feather.icons['alert-triangle'].toSvg()} Please enter a valid zip-code`
	]

	inputs.forEach( function(e, i) {
		validator(e, tests[i], messages[i])
	})

	let courier = document.querySelector('.deliveryOption__radio:checked')
	if (!courier) {
		valid = false
		document.querySelector('.delivery__error').classList.add('error')
	}
	else {
		document.querySelector('.delivery__error').classList.remove('error')
	}

	if (valid) {
		let deliveryInfo = {
			name: `${document.getElementById('delivery__firstNameInput').value} ${document.getElementById('delivery__lastNameInput').value}`,
			street: `${document.getElementById('delivery__streetInput').value}`,
			zip: `${document.getElementById('delivery__zipInput').value}`,
			courier: `${courier.id}`
		}

		localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo))

		window.location.href = '../checkout/'
	}
}
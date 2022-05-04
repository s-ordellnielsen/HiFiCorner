export default function deliveryFormvalidator(event) {
	event.preventDefault()
	let valid = true

	function validator(elm, test, message) {
		let testing = test.test(elm.value)
		elm.classList.add('error')
		console.log(testing)

		if (!testing) {
			valid = false
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
		'Please enter a valid first name',
		'Please enter a valid last name',
		'Please enter a valid street address',
		'Please enter a valid zip-code'
	]

	inputs.forEach( function(e, i) {
		validator(e, tests[i], messages[i])
	})

	console.log(valid)
}
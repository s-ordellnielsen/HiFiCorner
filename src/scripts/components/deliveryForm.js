export default function deliveryForm() {
	let element = document.createElement('form')
	element.classList.add('deliveryForm')

	element.innerHTML = `
		<div class="deliveryForm__inputRow">
			<label>
				<span>First name</span>
				<input type="text" placeholder="Pete" id="delivery__firstNameInput"/>
			</label>
			<label>
				<span>Last name</span>
				<input type="text" placeholder="Davidson" id="delivery__lastNameInput"/>
			</label>
		</div>
		<div className="deliveryForm__inputRow">
			<label>
				<span>Street</span>
				<input type="text" placeholder="Oxford Street 1" id="delivery__streetInput"/>
			</label>
			<label>
				<span>Zip-code</span>
				<input type="text" placeholder="W1D 1BS" id="delivery__zipInput"/>
			</label>
		</div>
	`

	return element
}
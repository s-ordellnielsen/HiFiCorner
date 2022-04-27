function colorPicker() {
    const element = document.createElement('div')
    element.classList.add('productDecription__colorPickerDiv')

    let productColorsArray = product.colors
            console.log("productColorsArray", productColorsArray)

    productColorsArray.forEach(function (element){
                let colorPickerLabel = document.createElement("label")
                let colorPickerInput = document.createElement("input")

                let colorCode = element.code
                let colorName = element.name

                colorPickerLabel.classList.add("productDecription__colorPickerLabel")
                
                colorPickerInput.name = "color"
                colorPickerInput.id = colorName
                colorPickerInput.classList.add("productDecription__colorPickerInput")
                colorPickerInput.type = "radio"
                let colorPickerInputChecked = document.querySelector(".productDecription__colorPickerInput:checked")
                console.log("colorPickerInputChecked", colorPickerInputChecked)

                //change-event**
                /*if (colorPickerInput.checked){
                    let colorChoise = colorPickerInput.id
                    console.log("colorChoise", colorChoise)
                }
                //let colorChoise = colorPickerInputChecked.id

                //console.log("colorChoise", colorChoise)*/


                let colorPicker = document.createElement("div")
                colorPicker.classList.add("productDecription__colorPicker")
                colorPicker.style.backgroundColor = colorCode

                let colorPickerSpan = document.createElement("span")
                colorPickerSpan.classList.add("productDecription__colorPickerSpan")
                colorPickerSpan.innerText = colorName

                colorPickerLabel.appendChild(colorPickerInput)
                colorPickerLabel.appendChild(colorPicker)
                colorPickerLabel.appendChild(colorPickerSpan)

                element.appendChild(colorPickerLabel)

            })
    
    // Code here
    
    return element
}
export default colorPicker
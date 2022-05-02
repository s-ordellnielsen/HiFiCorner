import "../../style/base/_variables.scss";
import "./colorPicker.scss";



function colorPicker(product) {
    const colorPickerElement = document.createElement('div')
    colorPickerElement.classList.add('productDecription__colorPickerDiv')

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

               /* if (colorPickerInput.checked){
                    colorPickerInput.style.border = "4px solid #214341"
                }*/
                

                console.log("colorCode", colorCode)

                colorPickerInput.addEventListener("change", function(event){

                    let colorPickers = element.querySelectorAll(".productDecription__colorPicker").toArray()

                    console.log("colorPickers", colorPickers)

                    //is not a function(?)
                    colorPickers.forEach(function(element){
                        element.classList.remove("productDecription__colorPicker--selected")
                
                    })


                    event.target.classList.add("productDecription__colorPicker--selected")
                    
                    var chosenColor = event.target.id
                    
                    console.log("chosenColor", chosenColor)
                })






                let colorPicker = document.createElement("div")
                colorPicker.classList.add("productDecription__colorPicker")
                colorPicker.style.backgroundColor = colorCode

                let colorPickerSpan = document.createElement("span")
                colorPickerSpan.classList.add("productDecription__colorPickerSpan")
                colorPickerSpan.innerText = colorName

                colorPickerLabel.appendChild(colorPickerInput)
                colorPickerLabel.appendChild(colorPicker)
                colorPickerLabel.appendChild(colorPickerSpan)

                colorPickerElement.appendChild(colorPickerLabel)

            })


    
    // Code here
    
    return colorPickerElement
}
export default colorPicker
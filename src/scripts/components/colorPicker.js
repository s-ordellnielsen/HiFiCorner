
import "../../style/modules/colorPicker.scss";



function colorPicker(product) {
    const colorPickerElement = document.createElement('div')
    colorPickerElement.classList.add('productDecription__colorPickerDiv')

    let productColorsArray = product.colors
            console.log("productColorsArray", productColorsArray)

            var chosenColor = ""

            let chosenColorInput = document.createElement("input")
            chosenColorInput.classList.add("chosenColorInput")
            chosenColorInput.classList.add("productColor")
            chosenColorInput.type = "text"
            chosenColorInput.value = chosenColor
            colorPickerElement.appendChild(chosenColorInput)

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

                console.log("defaultColor", productColorsArray[0].name)

                var defaultColor = productColorsArray[0].name

                chosenColor = defaultColor





                colorPickerInput.addEventListener("change", function(event){
                    console.log("clickColorPicker")

                    
                        
                    let colorPickers = colorPickerElement.getElementsByClassName("productDecription__colorPicker")
    
                    console.log("colorPickers", colorPickers)
    
                    /*//is not a function(?)
                    colorPickers.forEach(function(element){
                        element.classList.remove("productDecription__colorPicker--selected")
                
                    })
                    */
                    
                    console.log("cpe", colorPickerElement.querySelector(".productDecription__colorPicker--selected"))
                    colorPickerElement.querySelector(".productDecription__colorPicker--selected")?.classList.remove("productDecription__colorPicker--selected")
    
    
                    event.target.nextElementSibling.classList.add("productDecription__colorPicker--selected")
                    //kan man også tilføje classname til et søsterelement?
                    
                    chosenColor = event.target.id




                    chosenColorInput.value = event.target.id
                   
                    console.log("chosenColorInput", chosenColorInput)
                    
                    console.log("chosenColor", chosenColor)


                })
    
                

                console.log("colorCode", colorCode)

                



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

            let colorPickerRadio = colorPickerElement.getElementsByClassName("productDecription__colorPickerInput")
            

        console.log("colorPickerRadio", colorPickerRadio)

            

    
    // Code here
    
    return colorPickerElement
}
export default colorPicker
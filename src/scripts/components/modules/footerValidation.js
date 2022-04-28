let footerForm = document.getElementsByClassName('pageFooter__form')[0]
let footerSub = document.getElementById('footerSub')

footerForm.addEventListener('submit', function(event) {
    event.preventDefault()

    let footerTest = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(footerSub.value)

    let errorMessage = document.getElementsByClassName('pageFooter__errorMessage')[0]

    if (!footerTest) {
        footerForm.classList.add('false')

        errorMessage.classList.add('false')

        setTimeout(() => {
            errorMessage.classList.remove('false')
        }, 5000)
    } else {
        errorMessage.innerHTML = 'Thanks, we will now spam you Ü'

        errorMessage.classList.add('false')
    }
})
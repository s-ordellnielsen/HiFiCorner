

function loginElement() {

    var loginForm = document.getElementById("login")
    var loginUsername = document.getElementById("login_username")
    var loginPassword = document.getElementById("login_password")
    var loginErrorPassword = document.getElementById("login_errorpassword")
    var loginErrorUsername = document.getElementById("login_errorusername")
    var loginUErrormessage = []
    var loginPErrormessage = []



    




    loginForm.addEventListener("submit", login)

    function login(event) {
        event.preventDefault()
        fetch(`http://localhost:3001/customers?username=${loginUsername.value}&password=${loginPassword.value}`).then(response => response.json()).then(data => {

            if (data.length == 0) {
                loginUErrormessage.push(" there was an error with your login")
            }
            else {
                sessionStorage.setItem("user", JSON.stringify(data[0]))
                window.location.href = "profile.html"

            }
        })
    }
}
export default loginElement
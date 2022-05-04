import "../../../style/layout/profile.scss"
import feather from "feather-icons"

function profileDetail() {


    const element = document.createElement('div')
    element.classList.add('profile_details')
    var data = JSON.parse(window.sessionStorage.getItem('user'))
    
    element.innerHTML = `
    <button class="change">${feather.icons["edit-3"].toSvg()}</button>
    <div class="profile__userprofile">
    <img src="http://localhost:3001/${data.profile_picture}" class="profile__image">
    <p>${data.username}</p>
    <h1>Your orders</h1>
    <a href="/cart">Track or buy your orders again</a>
    </div>
    <div class="profile__favoritelist">
        <h1>Favorites</h1>
        <div class="profile_favorites">
            
        </div>
        <div class="profile_buttons">
        <button>${feather.icons["arrow-left"].toSvg()}</button>
        <button>${feather.icons["arrow-right"].toSvg()}</button>
        </div>
    </div>
    

        <form class="profile__information">
    <input type="text" name="firstname" value="${data.first_name}"  placeholder="Name" />
    <input type="text" name="lastname" value="${data.last_name}"  placeholder="last name"/>
    <input type="text" name="email" value="${data.email}"  placeholder="email"/>
    <input type="text" name="phone" value="${data.phone}"  placeholder="Phone number"/>
    <input type="text" name="country" value="${data.address.country}"  placeholder="country"/>
    <input type="text" name="zipcode" value="${data.address.zip_code}"  placeholder="Zip-Code"/>
    <input type="text" name="city" value="${data.address.city}"  placeholder="city"/>
    <input type="text" name="addressnumber" value="${data.address.number}"  placeholder="Adress number"/>
</form>  

    `
    
    
    var test = element.querySelector(".change")
    var edit = element.querySelector(".profile__information")
    var changer = true
    console.log(data.id)
    

    var favoritesElement = element.querySelector(".profile_favorites")
    data.favorites.forEach(function(favorite){
        fetch("http://localhost:3001/products/"+favorite).then(result => result.json()).then(favoriteData => {
            var favorite_name = document.createElement("p")
            favorite_name.innerHTML = favoriteData.name
            favoritesElement.appendChild(favorite_name)
        })
    })

    test.addEventListener("click", function(){
        changer = !changer
        edit.classList.toggle("profile__information--edit")
        test.classList.toggle("change--active")
        
        if(changer){
            var updateddata = {
                first_name: edit.firstname.value,
                last_name: edit.lastname.value,
                email: edit.email.value,
                phone: edit.phone.value,
                address: {
                    city: edit.city.value,
                    country: edit.country.value,
                    zip_code: edit.zipcode.value,
                    number: edit.addressnumber.value
                }
                
            }
            console.log(`http://localhost:3001/customers/${data.id}`)
            console.log(updateddata)
            fetch(`http://localhost:3001/customers/${data.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json; charset=UTF-8"
                },
                body: JSON.stringify(updateddata)

            }).then(response => response.json())
            .then(data => sessionStorage.setItem("user", JSON.stringify(data)))
            alert("Your profile has been updated")
        }

        
    })

    // Code here
    
    return element
}
export default profileDetail
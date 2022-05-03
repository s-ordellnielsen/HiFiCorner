import "../../../style/layout/profile.scss"
import feather from "feather-icons"

function profileDetail() {


    const element = document.createElement('div')
    element.classList.add('profile_details')
    var data = JSON.parse(window.sessionStorage.getItem('user'))
    console.log(data)
    
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
        <input type="button" value="back" />
        <input type="button" value="forward" />
        </div>
    </div>
    

        <form class="profile__information">
    <input type="text" value="${data.first_name}"  placeholder="Name" />
    <input type="text" value="${data.last_name}"  placeholder="last name"/>
    <input type="text" value="${data.email}"  placeholder="email"/>
    <input type="text" value="${data.phone}"  placeholder="Phone number"/>
    <input type="text" value="${data.address.country}"  placeholder="country"/>
    <input type="text" value="${data.address.zip_code}"  placeholder="Zip-Code"/>
    <input type="text" value="${data.address.city}"  placeholder="city"/>
    <input type="text" value="${data.address.number}"  placeholder="Adress number"/>
</form>  

    `
    
    
    var test = element.querySelector(".change")
    var edit = element.querySelector(".profile__information")

    var favoritesElement = element.querySelector(".profile_favorites")
    data.favorites.forEach(function(favorite){
        fetch("http://localhost:3001/products/"+favorite).then(result => result.json()).then(favoriteData => {
            var favorite_name = document.createElement("p")
            favorite_name.innerHTML = favoriteData.name
            favoritesElement.appendChild(favorite_name)
        })
    })

    test.addEventListener("click", function(){
        edit.classList.toggle("profile__information--edit")
        test.classList.toggle("change--active")

        
    })

    // Code here
    
    return element
}
export default profileDetail
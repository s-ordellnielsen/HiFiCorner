import "../../../style/layout/profile.scss"

function profileDetail() {


    const element = document.createElement('div')
    element.classList.add('profile_details')
    var data = JSON.parse(window.sessionStorage.getItem('user'))
    console.log(data)
    
    element.innerHTML = `<div class="profile__userprofile">
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
    

        <div class="profile__information">
            <input type="text" value="${data.first_name}" readonly />
    <input type="text" value="${data.last_name}" readonly/>
    <input type="text" value="${data.email}" readonly/>
    <input type="text" value="${data.phone}" readonly/>
    <input type="text" value="${data.address.country}" readonly/>
    <input type="text" value="${data.address.zip_code}" readonly/>
    <input type="text" value="${data.address.city}" readonly/>
    <input type="text" value="${data.address.number}" readonly/>
</div>  

    `
    var favoritesElement = element.querySelector(".profile_favorites")
    data.favorites.forEach(function(favorite){
        fetch("http://localhost:3001/products/"+favorite).then(result => result.json()).then(favoriteData => {
            var favorite_name = document.createElement("p")
            favorite_name.innerHTML = favoriteData.name
            favoritesElement.appendChild(favorite_name)
        })
    })

    // Code here
    
    return element
}
export default profileDetail
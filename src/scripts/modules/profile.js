function profile(){
    var user = JSON.parse(sessionStorage.getItem("user"))
    
    
    
    const output = `<article class="profile_overlay">
    <div> 
    <img src="http://localhost:3001/customers${user.profile_picture}" alt="userImage">
    <h1>Username</h1>
    </div>
    
    
    </article>`
    //document.getElementsByClassName("profile__details")[0].innerHTML += output
    
}
export default profile



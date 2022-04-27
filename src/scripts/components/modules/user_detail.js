

function profileDetail() {
    const element = document.createElement('div')
    element.classList.add('profile_details')
    var data = JSON.parse(window.sessionStorage.getItem('user'))
    console.log(data)
    
    element.innerHTML = `<div>
    <img src="${data.profile_picture}">
    <p>${data.username}</p>
    <h1>Your orders</h1>
    <a href="/">Track or buy your orders again</a>
    </div>
    
    

    
    `
    // Code here
    
    return element
}
export default profileDetail
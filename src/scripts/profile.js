import profileDetail from "./components/modules/user_detail.js"

function profile() {
    const element = document.createElement('div')
    element.classList.add('wrapper')
    
    element.appendChild(profileDetail)
    // Code here
    
    return element
}
document.body.append(profile())
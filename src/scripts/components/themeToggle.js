let toggle = document.getElementById('themeToggle');

toggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
    };
})

function themeToggle() {
	const element = document.createElement('div')
	element.classList.add('wrapper')
	
	// Code here
	
	return element
}
document.body.append(themeToggle())
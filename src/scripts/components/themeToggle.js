let toggle = document.getElementById('themeToggle');

toggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light')
    };
})
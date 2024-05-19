// __> Add Event When Scrolled Change Navbar Color.

document.addEventListener("scroll",() => {
    const changeColor = document.querySelector('nav')
    if (window.scrollY > 0) {
        changeColor.classList.add("scrolled")
    } else {
        changeColor.classList.remove("scrolled")
    }
})

// __> Add Event When Scrolled Add Attribute active on Sections.

var sections = document.querySelectorAll('section')
var navLinks = document.querySelectorAll('.navbar a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.navbar a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}
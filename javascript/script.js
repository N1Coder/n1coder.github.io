const body = document.body
const element = document.documentElement
let zeroScroll = 0

let menuNav = document.querySelector('header .nav')
let navActive = document.querySelector('#toggle-nav')
let header = document.querySelector('header')

// Function for toggle nav mobile
function activeMenu(){
    menuNav.classList.toggle('active-nav')
    navActive.classList.toggle('close-nav')
    element.classList.toggle('hidden')
    header.classList.toggle('change-bg')    
}

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0){
        body.classList.remove('scroll-up')
    }

    if (currentScroll > zeroScroll && !body.classList.contains('scroll-down')){
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
    }

    if (currentScroll < zeroScroll && body.classList.contains('scroll-down')){
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
    }

    zeroScroll = currentScroll
})
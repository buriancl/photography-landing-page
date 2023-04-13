const photoContainer = document.querySelector('.photo-container')
const photoLeftBtn = document.querySelector('.left-btn')
const photoRightBtn = document.querySelector('.right-btn')
const photoIndicators = document.querySelectorAll('.carousel-indicator')
const menuBurgerBtn = document.querySelector('.menu-burger')
const sideMenuContainer = document.querySelector('.side-menu-container')
const mobileSideMenuItems = document.querySelectorAll('.mobile-only')
const socialIconsMenu = document.querySelector('.social-icons')
const navList = document.querySelector('.nav-list')
const slides = document.querySelectorAll('.slide')
const slideIndicators = document.querySelectorAll('.carousel-indicator')

let index = 0
let windowWidth = window.innerWidth

const handleSideMenu = () => {
  menuBurgerBtn.classList.toggle('open')
  sideMenuContainer.classList.toggle('open')
  socialIconsMenu.classList.toggle('hidden')

  if (sideMenuContainer.classList.contains('open')) {
    navList.style.marginRight = '275px'
  } else {
    navList.style.marginRight = '20px'
  }
}

const changeImage = () => {
  if (index > slides.length - 1) {
    index = 0
  } else if (index < 0) {
    index = slides.length - 1
  }

  photoContainer.style.transform = `translateX(${-index * windowWidth}px)`
  slideIndicators.forEach((indicator) => {
    indicator.classList.remove('current')
  })
  slideIndicators[index].classList.add('current')
}

// Event Listeners
// Menu hamburger event listeners
menuBurgerBtn.addEventListener('click', handleSideMenu)

// Carousel button event listeners
photoLeftBtn.addEventListener('click', () => {
  index--

  changeImage()
})
photoRightBtn.addEventListener('click', () => {
  index++

  changeImage()
})
photoIndicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    index = i

    changeImage()
  })
})

// Window resize event listener
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth
  photoContainer.style.transform = `translateX(${-index * windowWidth}px)`
})

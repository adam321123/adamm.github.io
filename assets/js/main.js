/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLogo = document.getElementById('nav-logo'),
      navTheme = document.getElementById('theme-button');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        navToggle.classList.add('nav-toggleHidden')
        navClose.classList.add('nav-closeShow')
        navLogo.classList.add('logo-color')
        navLogo.classList.remove('scroll-logo-color')
        navTheme.classList.add('theme-show')
        navTheme.classList.remove('theme-show-scroll')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navClose.classList.remove('nav-closeShow')
        navToggle.classList.remove('nav-toggleHidden')
        navMenu.classList.remove('show-menu')
        navLogo.classList.remove('logo-color')
        navLogo.classList.add('scroll-logo-color')
        navTheme.classList.remove('theme-show')
        navTheme.classList.add('theme-show-scroll')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    navClose.classList.remove('nav-closeShow')
    navToggle.classList.remove('nav-toggleHidden')
    navLogo.classList.remove('logo-color')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    spaceBetween: 48,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 1.2,
        },
        768:{
            slidesPerView: 1,
        }
    }
  });
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header'),
          logoColor = document.getElementById('nav-logo'),
          toggleColor = document.getElementById('nav-toggle'),
          navTheme = document.getElementById('theme-button'),
          navLink1 = document.getElementById('nav-link1'),
          navLink2 = document.getElementById('nav-link2'),
          navLink3 = document.getElementById('nav-link3'),
          navLink4 = document.getElementById('nav-link4'),
          navLink5 = document.getElementById('nav-link5'),
          navLink6 = document.getElementById('nav-link6')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) 
        nav.classList.add('scroll-header'),
        nav.classList.add('scroll-header-bg'),
        logoColor.classList.add('scroll-logo-color'),
        toggleColor.classList.add('scroll-toggle-color'),
        navTheme.classList.add('theme-show-scroll'),
        navLink1.classList.add('nav__link-med'),
        navLink2.classList.add('nav__link-med'),
        navLink3.classList.add('nav__link-med'),
        navLink4.classList.add('nav__link-med'),
        navLink5.classList.add('nav__link-med'),
        navLink6.classList.add('nav__link-med'); 
    else 
        nav.classList.remove('scroll-header'),
        nav.classList.remove('scroll-header-bg'),
        logoColor.classList.remove('scroll-logo-color'),
        toggleColor.classList.remove('scroll-toggle-color'),
        navTheme.classList.remove('theme-show-scroll'),
        navLink1.classList.remove('nav__link-med'),
        navLink2.classList.remove('nav__link-med'),
        navLink3.classList.remove('nav__link-med'),
        navLink4.classList.remove('nav__link-med'),
        navLink5.classList.remove('nav__link-med'),
        navLink6.classList.remove('nav__link-med'); ;
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) 
        scrollUp.classList.add('show-scroll'); 
    else 
        scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
const toggles = document.querySelectorAll('.faq-toggle')
const form = document.getElementById('form')
const btnSubmit = document.querySelector('.btn')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  btnSubmit.addEventListener('submit', () => {
    form.innerHTML = 
    `
    <h1 class="heading-contact">Thank you <br> for contacting us, <br>will get back to you <br> as soon as possible.</h1>
    `
    form.style.border = 'none'
    form.style.justifyContent = 'center'
})



 

/*===== ПОКАЗВАНЕ НА МЕНЮТО =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== ПРЕМАХВАНЕ НА МЕНЮТО ЗА МОБИЛНИ ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Когато кликнем върху всяка nav__link, премахваме класа show-menu
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== АКТИВНИ ЛИНКОВЕ ПРИ СКРОЛВАНЕ ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== АНИМАЦИЯ ПРИ СКРОЛВАНЕ =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 300,
    delay: 20,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// Инициализация на EmailJS с публичния ключ
(function () {
    emailjs.init("ais59-DX_2_DnkzBn"); // Постави тук твоя публичен ключ
})();

// Изпращане на имейл от контактната форма
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвратява изпращането на формата по подразбиране

    // Събиране на данните от формата
    const formData = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
    };

    // Изпращане на имейла чрез EmailJS
    emailjs
        .send("service_q8tpgb4", "template_mgc10jy", formData) // Заменяй с твоето Service ID и Template ID
        .then(
            function (response) {
                // Показва съобщение при успешен изпратен имейл
                document.getElementById("statusMessage").innerText =
                    "Съобщението беше изпратено успешно!";
                document.getElementById("contactForm").reset(); // Нулира формата
            },
            function (error) {
                // Показва съобщение при грешка
                document.getElementById("statusMessage").innerText =
                    "Възникна грешка при изпращането. Опитайте отново.";
                console.error("Грешка при изпращането:", error);
            }
        );
});

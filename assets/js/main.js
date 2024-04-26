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
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*==================== ПРЕВОД ====================*/
const translateToBulgarian = () => {
    // Превод на текста за менюто
    document.getElementById('nav-toggle').textContent = 'Меню';
    document.querySelectorAll('.nav__link').forEach(link => {
        if (link.textContent === 'Home') {
            link.textContent = 'Начало';
        } else if (link.textContent === 'About') {
            link.textContent = 'Относно';
        } else if (link.textContent === 'Skills') {
            link.textContent = 'Умения';
        } else if (link.textContent === 'Contact') {
            link.textContent = 'Контакт';
        }
    });

    // Превод на текста за преглед на уменията
    document.querySelector('.skills__subtitle').textContent = 'Професионални умения';
    document.querySelector('.skills__text').textContent = 'Като Full Stack разработчик разполагам с разнообразие от технически умения, които обединяват експертност в разработката на Frontend и Backend. Имам следните професионални умения:';
    document.querySelectorAll('.skills__name').forEach(skill => {
        if (skill.textContent === 'HTML5') {
            skill.textContent = 'HTML5';
        } else if (skill.textContent === 'CSS3') {
            skill.textContent = 'CSS3';
        } else if (skill.textContent === 'JAVASCRIPT') {
            skill.textContent = 'JavaScript';
        } else if (skill.textContent === 'UX/UI') {
            skill.textContent = 'UX/UI';
        } else if (skill.textContent === 'C#') {
            skill.textContent = 'C#';
        } else if (skill.textContent === 'Unity') {
            skill.textContent = 'Unity';
        } else if (skill.textContent === 'Python') {
            skill.textContent = 'Python';
        } else if (skill.textContent === 'Solidity') {
            skill.textContent = 'Solidity';
        }
    });

    // Превод на текста в раздела "About"
    document.querySelector('.about__subtitle').textContent = 'За мен';
    document.querySelector('.about__text').textContent = 'Моето разбиране и страст към разработката на уеб приложения ме превърнаха в широко развит разработчик с разнообразие от умения. Фокусиран съм върху иновациите и технологичния прогрес, постоянно стремя се да създавам функционални и елегантни решения. Разполагам с успешен трак на динамично разработване на отзивчиви уеб приложения, хармонизирайки структура, стил и функционалност. Моето вълнение за решаване на проблеми и посрещане на предизвикателства ме вдъхновява постоянно да търся нови начини за подобрение на технологичните решения. Чрез съчетаване на креативност с техническа експертиза, целя да постигна оптимални резултати и да отговоря на изискванията на клиентите. Готов съм да допринеса за всякакъв проект, като предоставям иновативни и ефективни решения. Моята цел не е само да пиша код, а да изградя уеб пространство, което предлага подобрени и удовлетворителни преживявания за потребителите.';
};

const translateToEnglish = () => {
    // Превод на текста за менюто
    document.getElementById('nav-toggle').textContent = 'Menu';
    document.querySelectorAll('.nav__link').forEach(link => {
        if (link.textContent === 'Начало') {
            link.textContent = 'Home';
        } else if (link.textContent === 'Относно') {
            link.textContent = 'About';
        } else if (link.textContent === 'Умения') {
            link.textContent = 'Skills';
        } else if (link.textContent === 'Контакт') {
            link.textContent = 'Contact';
        }
    });

    // Превод на текста за преглед на уменията
    document.querySelector('.skills__subtitle').textContent = 'Professional Skills';
    document.querySelector('.skills__text').textContent = 'As a Full Stack developer, I possess a variety of technical skills that combine expertise in both Frontend and Backend development. I have the following professional skills:';
    document.querySelectorAll('.skills__name').forEach(skill => {
        if (skill.textContent === 'HTML5') {
            skill.textContent = 'HTML5';
        } else if (skill.textContent === 'CSS3') {
            skill.textContent = 'CSS3';
        } else if (skill.textContent === 'JavaScript') {
            skill.textContent = 'JAVASCRIPT';
        } else if (skill.textContent === 'UX/UI') {
            skill.textContent = 'UX/UI';
        } else if (skill.textContent === 'C#') {
            skill.textContent = 'C#';
        } else if (skill.textContent === 'Unity') {
            skill.textContent = 'Unity';
        } else if (skill.textContent === 'Python') {
            skill.textContent = 'Python';
        } else if (skill.textContent === 'Solidity') {
            skill.textContent = 'Solidity';
        }
    });

    // Превод на текста в раздела "About"
    document.querySelector('.about__subtitle').textContent = 'About';
    document.querySelector('.about__text').textContent = 'My understanding and passion for web application development have shaped me into a well-rounded developer with a wide range of skills. Focused on innovations and technological progress, I continually strive to create functional and elegant solutions. I have a successful track record in creating dynamic and responsive web applications, harmonizing structure, style, and functionality. My enthusiasm for problem-solving and tackling challenges inspires me to constantly seek new ways to improve technological solutions. By combining creativity with technical expertise, I aim to achieve optimal results and meet the requirements of clients. I am ready to contribute to any project by providing innovative and efficient solutions. My goal is not just to write code but to build a web space that delivers enhanced and satisfying experiences for users.';
};

let languageToggleState = false;

// Добавяне на събитие за превод при натискане на бутона за HTML
document.querySelector('#language-toggle').addEventListener('click', () => {
    if (languageToggleState) {
        translateToBulgarian();
    } else {
        translateToEnglish();
    }
    
    languageToggleState = !languageToggleState;
});

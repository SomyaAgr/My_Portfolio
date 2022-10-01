/* 
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function PageTransition() {

    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })

    }
    for (let i = 0; i < allSections.length; i++) {
    allSections[i].addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);

            element.classList.add('active');
        }
    })
}
}
PageTransition(); */


const sections = document.querySelectorAll('.section');
const sectBtn = document.querySelectorAll('.control');

function PageTransition() {

    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
            for(let j = 0; j < sections.length; j++) {
                sections[j].classList.remove('active')
            }
            const fetchID = document.getElementById(this.getAttribute('data-id'))
            fetchID.classList.add('active')
        })
    }
}
PageTransition();
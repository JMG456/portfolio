console.log(screen.width) //for getting screen resolution

//fullpage.js
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true
})

fullpage_api.setAllowScrolling(false);

const arrowDown = document.querySelector('.arrow-down');
const svgLogo = document.querySelector('#logo-svg');

svgLogo.onanimationend = () => {
    fullpage_api.setAllowScrolling(true);
}


// Modal properties
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.proj-img')
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');
const nextButton = document.getElementById('next-img');
const prevButton = document.getElementById('prev-img');
const barStatus = document.getElementById('bar-status');







previews.forEach((preview) => { //add event listener in forEach because previews is an array so we have to loop through them all :D
    preview.addEventListener("click", () => {

        barStatus.innerHTML = "#fp-nav ul{ opacity: 0; pointer-events: none; }";
        modal.classList.add("open");
        original.classList.add("open");
        preview.classList.add('current');

        //Dynamic change text and image
        let originalSrc = preview.firstElementChild.getAttribute("src"); //get full img from clicked preview image from the "data-original" attribute in ints img element
        original.src = originalSrc;

        let altText = preview.firstElementChild.alt; //get alt attribute from img element
        caption.innerHTML = 'Link to Page';
        caption.setAttribute('href', altText);
    })
});

nextButton.addEventListener('click', () => {
    let currentImage = document.querySelector('.current');
    let nextImage;
    if (currentImage.nextElementSibling) {
        nextImage = currentImage.nextElementSibling;
    } else {
        nextImage = previews[0];
    }

    currentImage.classList.remove('current');
    nextImage.classList.add('current');

    original.src = nextImage.firstElementChild.getAttribute('src');
    caption.setAttribute('href', nextImage.firstElementChild.alt);

    console.log(nextImage.firstElementChild);

})

prevButton.addEventListener('click', () => {
    let currentImage = document.querySelector('.current');
    let prevImage;
    if (currentImage.previousElementSibling) {
        prevImage = currentImage.previousElementSibling;
    } else {
        prevImage = previews[previews.length - 1];
    }

    currentImage.classList.remove('current');
    prevImage.classList.add('current');

    original.src = prevImage.firstElementChild.getAttribute('src');
    caption.setAttribute('href', prevImage.firstElementChild.alt);

    console.log(prevImage.firstElementChild);
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) { //check where you are clicking. If click on img or text, won't exec, otherwise (black opacity bg), will exec because it is modal class
        modal.classList.remove("open");
        original.classList.remove("open");
        barStatus.innerHTML = "#fp-nav ul { opacity: 1; pointer-events: all; }";

        const currentImage = document.querySelector('.current');
        currentImage.classList.remove('current');
    }
});









//getting the length of every SVG letter, not needed anymore
const logoLetter = document.querySelectorAll('#logo-svg path');

for (let i = 0; i < logoLetter.length; i++) {
    console.log(`letter ${i + 1} is ${logoLetter[i].getTotalLength()}`)
}



//tilt.js
VanillaTilt.init(document.querySelectorAll(".icon"), {
    max: 25,
    speed: 100
});


//Intersection observers Section 2

const appearOptions = {
    threshold: .5
};

const section2 = document.querySelector('.cont-lg');
const title1 = document.querySelector('.title');
const icons = document.querySelectorAll('.icon');

const observer2 = new IntersectionObserver(function (entries, observer2) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            title1.classList.add('opacity');
            title1.style.setProperty('--titleUnder', 1)
            icons.forEach(icon => {
                icon.classList.add('fadein');
            })

            observer2.unobserve(entry.target);
        }
    })
}, appearOptions);

observer2.observe(section2);

icons.forEach(icon => {
    icon.ontransitionend = () => {
        icon.style.pointerEvents = 'all';
    }
})

//Intersection observers Section 3
const section3 = document.querySelector('.container-lg');
const title2out = document.querySelector('.title2-out');
const title2in = document.querySelector('.title2-in');
const projEmpty1 = document.querySelector('.proj-empty1')
const projEmpty3 = document.querySelector('.proj-empty3')
const title2 = document.querySelector('.title2');
const imgCont = document.querySelector('.img-cont');
const infoCont = document.querySelector('.info-cont-out');
const projImg = document.querySelectorAll('.proj-img');


const observer3 = new IntersectionObserver(function (entries, observer3) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            title2out.style.setProperty('--title2X', 1);
            title2in.style.setProperty('--title2Y', '100%');
            projEmpty1.classList.add('proj-appear');
            projEmpty3.classList.add('proj-appear');
            title2.classList.add('title2fade');
            imgCont.classList.add('img-cont-fade');
            infoCont.classList.add('img-cont-fade');

            observer3.unobserve(entry.target);
        }
    })
}, appearOptions);

observer3.observe(section3);


// Allow clicking on images after container is in
imgCont.ontransitionend = () => {
    projImg.forEach(img => {
        img.style.pointerEvents = 'all';
    })
};


//Intersection Observers Projects section
const projectsSect = document.querySelector('.projects');
const projectTitle = document.querySelector('.project-title h1');
const projectsEmpty = document.querySelector('.projects .empty');
const projectsGrid = document.querySelector('.project-grid');

const observerProjects = new IntersectionObserver((entries, observerProjects)=>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        } else{
            projectTitle.classList.add('project-fade-in');
            projectsEmpty.classList.add('empty-scale');
            projectsGrid.classList.add('project-grid-slide-in');

            observerProjects.unobserve(entry.target);
        }
    })
}, appearOptions);

observerProjects.observe(projectsSect);


//Intersection Observers Last section
const section4 = document.querySelector('.end-card-out');
const endCard = document.querySelector('.end-card');
const pp = document.querySelector('.pp');
const endtext = document.querySelectorAll('.end-card .endtext');


const observer4 = new IntersectionObserver((entries, observer4) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            endCard.classList.add('appear');
            pp.classList.add('ppAppear');
            observer4.unobserve(entry.target);
        }
    })
}, appearOptions)

observer4.observe(section4);

let counter = 0;

pp.ontransitionend = () => {
    endtext.forEach((text, index) => {
        console.log(counter);
        text.style.animation = `endcardContent .2s ease forwards ${counter}s`;
        counter = counter + 0.2;
    })
    counter = 0;
}
const body = document.querySelector('body');
const cont = document.querySelectorAll('.cont');

const logo = document.querySelector('.logo');

const logoLetter = document.querySelectorAll('#logo-svg path');

const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.proj-img img')
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

previews.forEach((preview) => { //add event listener in forEach because previews is an array so we have to loop through them all :D
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");

        //Dynamic change text and image
        const originalSrc = preview.getAttribute("src"); //get full img from clicked preview image from the "data-original" attribute in ints img element
        original.src = originalSrc;

        const altText = preview.alt; //get alt attribute from img element
        caption.innerHTML = 'Link to Page';
        caption.setAttribute('href', altText);
    })
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) { //check where you are clicking. If click on img or text, won't exec, otherwise (black opacity bg), will exec because it is modal class
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});






new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true
})


for (let i = 0; i < logoLetter.length; i++) {
    console.log(`letter ${i + 1} is ${logoLetter[i].getTotalLength()}`)
}

console.log(screen.width)

VanillaTilt.init(document.querySelectorAll(".icon"), {
    max: 25,
    speed: 400
});

/*
VanillaTilt.init(document.querySelector(".end-card"), {
    max: 25,
    speed: 100
});
*/






logo.addEventListener('mouseenter', () => {
    cont.forEach(cont => {
        cont.classList.toggle('blur-active');
    });
})



body.addEventListener('click', () => {
    cont.forEach(cont => {
        cont.classList.toggle('blur-active');
    });
    //blur.classList.toggle('blur-active');
})



/*const menu = document.querySelector('.menu');
const menuHamburguer = document.querySelector('.menu-hamburguer');

function activateMenu() {
    menuHamburguer.addEventListener('click', function(){
        this.classList.toggle('active');
        menu.classList.toggle('menu-active');
    });
}

activateMenu();
*/

function scrollHeader() {
    const nav = document.querySelector(".bg-header");

    if (this.scrollY >= 200) {
        nav.classList.add("active-header");
    } else {
        nav.classList.remove("active-header");
    }
}

window.addEventListener("scroll", scrollHeader);

const menu = document.querySelector(".menu");
//const menuHamburguer = document.querySelector('.menu-hamburguer');

/*--=========== TIMELINE MENU ============- */

const bx = document.querySelector(".bx");
gsap.set(".menu", { x: "-100%", opacity: 0 });

var tl2 = gsap.timeline({ paused: true });

tl2
    .to(".menu", 1.1, {
        x: 0,
        opacity: 1,
        ease: "power4.out",
    })
    .from(
        ".nav-item",
        1,
        {
            x: -100,
            opacity: 0,
            //filter: 'blur(10px)',
            stagger: { each: 0.1 },
            ease: "power4.out",
        },
        "-=0.5"
    )
    .from(
        ".grid-icons-menu div",
        0.5,
        {
            x: -100,
            opacity: 0,
            //filter: 'blur(10px)',
            ease: "power4.out",
        },
        "-=0.4"
    )
    .from(
        ".grid-icons-menu h4",
        0.5,
        {
            x: -100,
            opacity: 0,
            //filter: 'blur(10px)',
            ease: "power4.out",
        },
        "-=0.3"
    )
    .from(
        ".grid-icons-menu span",
        0.5,
        {
            x: -100,
            opacity: 0,
            ease: "power4.out",
        },
        "-=0.3"
    )
    .from(
        ".grid-icons-menu  a",
        0.5,
        {
            opacity: 0,
            stagger: { each: 0.1 },
            ease: "power4.out",
        },
        "-=0.25"
    );

tl2.reverse();

bx.addEventListener("click", () => {
    bx.classList.toggle("active");
    tl2.reversed(!tl2.reversed());
});



function toggleClass(selector, className) {
    const elemento = document.querySelector(selector);

    if (elemento) {
        elemento.classList.toggle(className);
    }
}

setInterval(() => toggleClass('.c1', 'c1-move'), 2500);
setInterval(() => toggleClass('.c2', 'c2-move'), 4000);
setInterval(() => toggleClass('.c3', 'c3-move'), 5000);
setInterval(() => toggleClass('.c4', 'c4-move'), 5000);



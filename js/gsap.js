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


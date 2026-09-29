
/* =========================================
   REGISTER GSAP PLUGIN
========================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================
   PAGE LOAD ANIMATION
========================================= */

const introTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});


introTimeline
    .to(".eyebrow", {
        opacity: 1,
        y: 0,
        duration: 0.7
    })

    .to(".headline span", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15
    }, "-=0.35")

    .to(".intro", {
        opacity: 1,
        y: 0,
        duration: 0.7
    }, "-=0.45")

    .to(".stat", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12
    }, "-=0.3");


/* =========================================
   COUNTER ANIMATION
========================================= */

document.querySelectorAll(".counter").forEach(counter => {

    const target = Number(counter.dataset.value);

    gsap.to(counter, {
        innerText: target,
        duration: 1.4,
        delay: 1.1,
        ease: "power2.out",

        snap: {
            innerText: 1
        },

        onUpdate: function () {
            counter.innerText = Math.round(
                Number(counter.innerText)
            );
        }
    });

});


/* =========================================
   INITIAL CAR STATE
========================================= */

gsap.set(".car", {
    xPercent: -50,
    yPercent: -50,
    scale: 0.82,
    rotate: -2
});


/* =========================================
   SCROLL DRIVEN CAR ANIMATION
========================================= */

const carAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",

        scrub: 1.2,

        pin: false,

        invalidateOnRefresh: true
    }
});


carAnimation

    /* Phase 1 — move upward and slightly right */
    .to(".car", {
        x: 90,
        y: -60,
        scale: 0.9,
        rotate: 2,
        ease: "none"
    })

    /* Phase 2 — move further right */
    .to(".car", {
        x: 240,
        y: -20,
        scale: 1.02,
        rotate: 5,
        ease: "none"
    })

    /* Phase 3 — exit the hero */
    .to(".car", {
        x: 520,
        y: 70,
        scale: 1.15,
        rotate: 8,
        ease: "none"
    });


/* =========================================
   BACKGROUND MOVEMENT
========================================= */

gsap.to(".visual-glow", {
    x: 120,
    y: -40,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5
    }
});


/* =========================================
   SPEED LINES
========================================= */

gsap.to(".line-one", {
    x: -180,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to(".line-two", {
    x: -260,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.2
    }
});

gsap.to(".line-three", {
    x: -140,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 0.8
    }
});


/* =========================================
   HERO CONTENT PARALLAX
========================================= */

gsap.to(".hero-content", {

    y: -80,
    opacity: 0.25,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }

});


/* =========================================
   SECOND SECTION REVEAL
========================================= */

gsap.from(".section-content", {

    y: 80,
    opacity: 0,

    duration: 1,

    scrollTrigger: {
        trigger: ".next-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
    }

});


/* =========================================
   FEATURE REVEAL
========================================= */

gsap.from(".feature", {

    y: 40,
    opacity: 0,

    duration: 0.7,
    stagger: 0.15,

    scrollTrigger: {
        trigger: ".feature-row",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }

});


/* =========================================
   REFRESH SCROLLTRIGGER
========================================= */

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

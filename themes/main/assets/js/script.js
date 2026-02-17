
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.custom-item-icon').forEach(iconWrapper => {
        iconWrapper.addEventListener("click", () => {
            const icon = iconWrapper.querySelector("i");

            // find the correct parent
            const item =
                iconWrapper.closest(".question-item") ||
                iconWrapper.closest(".custom-item");

            if (!item) return;

            // find the correct content
            const content =
                item.querySelector(".question-item-content") ||
                item.querySelector(".custom-item-content");

            if (!content) return;

            content.classList.toggle("is-collapsed");

            icon.classList.toggle("ri-eye-line");
            icon.classList.toggle("ri-eye-off-line");
        });
    });
    const swiper = new Swiper('.swiper', {
        autoHeight:true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      effect: 'cube',
      cubeEffect: {
        slideShadows: false,
        shadow:false,
      },
      });
      gsap.registerPlugin(ScrollTrigger);
    
    
    gsap.utils.toArray("[data-animate-parent]").forEach((parent)=>{
        const children = parent.querySelectorAll("[data-animate]");
        gsap.fromTo(children, {y: 300, opacity: 0}, 
            {duration: 0.8, opacity:1,y:0, ease: "power1.out",scrollTrigger : {
                 trigger: parent,
                start: "top bottom",
                // toggleActions: "play pause resume reset"
            }}
       )
    })
     gsap.utils.toArray("[data-animate-parent-stagger]").forEach((parent)=>{
        const children = parent.querySelectorAll("[data-animate-stagger]");
        gsap.fromTo(children, {y: 300, opacity: 0}, 
            {duration: 0.8, opacity:1,y:0, ease: "power1.out",stagger:0.3,scrollTrigger : {
                 trigger: parent,
                start: "top bottom",
                // toggleActions: "play pause resume reset"
            }}
       )
    })
});


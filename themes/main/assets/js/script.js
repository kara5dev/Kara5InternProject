
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
      
     const elements = [
       {title: ".hero-top-text", trigger: ".hero-top-text-wrap"},
       {title: ".subtitle-gsap", trigger: ".subtitle-gsap-wrapper"},
       { title: ".hero-title-text", trigger: ".hero-title"},
       { title: ".hero-banner", trigger: ".hero-banner-wrapper"},   
       { title: ".hero-text", trigger: ".hero-text-wrap"},
       { title: ".hero-buttons", trigger: ".hero-buttons-wrapper"},
       { title: ".gsap-arrow-link" , trigger: ".gsap-arrow-wrapper"},
       { title: ".about-title", trigger: ".about-title-text"},
       { title: ".subtitle-about-home-gsap", trigger: ".subtitle-about-home-gsap-wrapper"},
       { title: ".about-text-home", trigger: ".about-text"},
      
     ]
     elements.forEach((el)=>{
        gsap.fromTo(el.title, {y: 300, opacity: 0}, 
            {duration: 0.8, opacity:1,y:0, ease: "power1.out",scrollTrigger : {
                trigger: el.trigger,
                start: "top bottom",
                // toggleActions: "play pause resume reset"
            }}
        )
     })
     gsap.fromTo(".about-content p", {y: 300, opacity: 0}, 
            {duration: 0.8, opacity:1,y:0, ease: "power1.out",stagger:0.3,scrollTrigger : {
                trigger: ".about-content",
                start: "top bottom" ,
                // toggleActions: "play pause resume reset"
            }}
        )
    
});


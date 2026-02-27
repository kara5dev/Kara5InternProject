

gsap.registerPlugin(ScrollTrigger);

export default class Counter {
    constructor(section) {
        this.section = section;
        this.numbers = [...section.querySelectorAll(".number")];
        this.init();
    }

    init() {
        this.numbers.forEach(el => this.prepare(el));
        this.createTrigger();
    }

    prepare(el) {
        const raw = el.textContent.trim();
        const match = raw.match(/^(\d+)(.*)$/);

        if (!match) return;

        el.dataset.target = match[1];
        el.dataset.suffix = match[2] || "";
        el.textContent = "0" + el.dataset.suffix;
    }

    createTrigger() {
        ScrollTrigger.create({
            trigger: ".experience-block",
            start: "top 90%",
            once: true,
            onEnter: () => this.animate()
        });
    }

    animate() {
        this.numbers.forEach(el => {
            let target = parseInt(el.dataset.target, 10);
            let suffix = el.dataset.suffix;

            const obj = { value: 0 };
            
            if(target>=1000000){
                suffix = `M${suffix}`
                 target = target/1000000;
            }
            if(target>=1000){
                suffix =  `K${suffix}`;
                target = target/1000;
            }
           
            
            gsap.to(obj, {
                value: target,
                duration: 1.6,
                ease: "power3.out",
                onUpdate: () => {
                    el.textContent = Math.floor(obj.value) + suffix;
                }
            });
        });
    }

    static initAll() {
        
        let counters = document.querySelectorAll('.experience-projects');

        if (!counters.length) return;

        counters.forEach(section => new Counter(section));
    }
}
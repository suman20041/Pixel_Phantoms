document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. HERO TEXT TYPING EFFECT ---
    const consoleLines = document.querySelectorAll(".console-text");
    const tl = gsap.timeline();

    // Glitch title entry
    tl.from(".hero-glitch", { duration: 1, opacity: 0, y: 20, ease: "power2.out" });

    // Console text typing simulation
    consoleLines.forEach((line) => {
        const originalText = line.innerText;
        line.innerText = ""; 
        tl.to(line, {
            opacity: 1, 
            duration: 0.5,
            onStart: () => {
                let i = 0;
                const typeInterval = setInterval(() => {
                    line.innerText = originalText.substring(0, i+1);
                    i++;
                    if (i >= originalText.length) clearInterval(typeInterval);
                }, 20); // Typing speed
            }
        }, "-=0.1");
    });

    // Subtitle fade in
    tl.to(".section-sub", { opacity: 1, y: 0, duration: 0.8 });

    // --- 2. STEP CARDS REVEAL ANIMATION ---
    gsap.fromTo(".reveal-card", 
        { y: 50, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".join-steps-grid",
                start: "top 85%",
            },
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.8,
            ease: "back.out(1.7)"
        }
    );

    // --- 3. CUSTOM MOUSE CURSOR (Desktop Only) ---
    const cursor = document.getElementById('cursor-highlight');
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { 
                x: e.clientX, 
                y: e.clientY, 
                duration: 0.1, 
                ease: "power2.out" 
            });
        });
    }
});
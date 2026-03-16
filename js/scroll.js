/**
 * scrollAnimate
 *
 * 用法：
 *   scrollAnimate([
 *     {
 *       trigger: ".BG_04",           // 觸發元素（必填）
 *       rootMargin: "0px 0px -30% 0px", // 可選，預設 "0px 0px -30% 0px"
 *       once: true,                  // 可選，預設 true（觸發一次後停止觀察）
 *       animate(el) {                // el = 觸發的 DOM 元素
 *         gsap.to(".thing04-1", { scale: 1.1, duration: 0.3 })
 *       },
 *     },
 *   ])
 */
function scrollAnimate(items) {
    items.forEach(({ trigger, rootMargin = "0px 0px -50% 0px", once = true, animate }) => {
        const targets = document.querySelectorAll(trigger)
        if (!targets.length) return

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    if (once) obs.unobserve(entry.target)
                    animate(entry.target)
                })
            },
            { rootMargin }
        )

        targets.forEach((el) => obs.observe(el))
    })
}
scrollAnimate([
    {
        trigger: ".BG_08",
        once: true,
        animate: () => gsap.to(".thing08-1", { scale: 1.06, duration: 0.6, yoyo: true, repeat: 1, ease: "power2.inOut" }),
    },
    {
        trigger: ".BG_09",
        once: true,
        animate: () => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5, defaults: { transformOrigin: "bottom center" } })
            tl.to(".thing09-4", { scaleY: 0.93, scaleX: 1.02, duration: 0.2, ease: "power2.in" })
                .to(".thing09-4", { scaleY: 1.02, scaleX: 0.995, duration: 0.35, ease: "power2.out" })
                .to(".thing09-4", { scaleY: 1, scaleX: 1, duration: 0.25, ease: "sine.inOut" })

            gsap.to(".thing09-2000-shine-bar", { x: "350%", duration: 2, ease: "power2.inOut", delay: 0.4 })
        },
    },
    {
        trigger: ".BG_12",
        once: true,
        animate: () => gsap.to(".thing12-1-1,.thing12-1-2,.thing12-1-3,.thing12-1-4,.thing12-1-5,.thing12-1-6", { opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }),
    },
    {
        trigger: ".BG_12",
        once: true,
        animate: () => {
            gsap.fromTo(".thing12-4", { opacity: 0, xPercent: -50, }, { opacity: 1, xPercent: 0, duration: 1, delay: 0.5, ease: "power2.inOut" })
            gsap.fromTo(".thing12-5", { opacity: 0, scaleX: 0, }, { opacity: 1, scaleX: 1, duration: 1, delay: 0.5, ease: "power2.inOut", transformOrigin: "bottom left" })
        }
    },
    {
        trigger: ".BG_18",
        once: true,
        animate: () => {
            gsap.to(".thing18-1-1,.thing18-1-2,.thing18-1-3,.thing18-1-4", { opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" })
            gsap.fromTo(".thing18-2", { opacity: 0.5, }, { opacity: 1, duration: 0.5, ease: "power2.inOut" })
        }
    },
])
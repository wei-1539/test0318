// 收合功能
function scrollShow(scrollID) {
    const show = document.querySelectorAll(scrollID)
    show.forEach(element => {
        element.classList.toggle("show")

        // QA 按鈕切換（關：btn_1 / 開：btn_2）
        const qaWrap = element.closest(".QA01, .QA02, .QA03")
        if (qaWrap) {
            qaWrap.classList.toggle("is-open", element.classList.contains("show"))
        }
    })
}

// 問答區高度調整
const thing40_4 = document.querySelector(".thing40-4")
const thing41 = document.querySelector(".BG_41")

function updateThing41Margin() {
    if (!thing40_4 || !thing41) return
    thing41.style.marginTop = `-${thing40_4.offsetHeight}px`
}


// 初始化一次
window.addEventListener("load", updateThing41Margin)
// 視窗 resize 時更新
window.addEventListener("resize", updateThing41Margin)
// 元素本身高度變化時也更新（例如文字內容改變）
if (window.ResizeObserver && thing40_4) {
    const observer = new ResizeObserver(updateThing41Margin)
    observer.observe(thing40_4)
}

// thing04-2 / thing04-3：區域 50% 可見時觸發，水滴抖動約兩次（scale + skew），緩出、不循環

// thing02-1：loading 完成後 0.6 秒淡入
const tlThing02 = gsap.timeline()
gsap.set(".thing02-1, .thing02-3", { opacity: 0, })
window.addEventListener("load", function () {
    setTimeout(() => {
        tlThing02.to(".thing02-1", { opacity: 1, duration: 1, ease: "power1.inOut" })
        .to(".thing02-3", { opacity: 1, duration: 1, ease: "power1.inOut" }, "<.5")
    }, 600)
})// 使用 timeline 控制 thing02-1 / thing02-3

// 水滴動態
function playDrop(targets) {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", transformOrigin: "center center" } })
    tl.to(targets, { scale: 0.985, skewX: 1.6, skewY: 0.8, duration: 0.16 })
        .to(targets, { scale: 1.02, skewX: -1.6, skewY: -0.8, duration: 0.16 })
        .to(targets, { scale: 0.993, skewX: 0.9, skewY: 0.45, duration: 0.14 })
        .to(targets, { scale: 1.01, skewX: -0.9, skewY: -0.45, duration: 0.14 })
        .to(targets, { scale: 1, skewX: 0, skewY: 0, duration: 0.18 })
}

scrollAnimate([
    { trigger: ".BG_04", animate: () => playDrop(".thing04-1, .thing04-2, .thing04-3") },
    { trigger: ".BG_19", animate: () => playDrop(".thing19-2, .thing19-3, .thing19-4") },
    { trigger: ".BG_33", animate: () => playDrop(".thing33-1, .thing33-2") },
])

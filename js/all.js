// 收合功能
function scrollShow(scrollID) {
    const show = document.querySelectorAll(scrollID)
    show.forEach(element => {
        element.classList.toggle("show")
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

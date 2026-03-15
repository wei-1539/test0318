// 收合功能
function scrollShow(scrollID) {
    const show = document.querySelector(scrollID)
    show.classList.toggle("show")
}

// 彈跳視窗
function popUpShow(showElement) {
    document.body.style.overflow = "hidden";
    const show = document.querySelector(showElement);
    show.classList.add("popControl--active");
    document.body.style.overflow = "hidden";
    show.style.overflowY = "scroll";
}

function popUpClose(showElement) {
    document.body.style.overflow = "visible";
    const show = document.querySelector(showElement);
    show.classList.remove("popControl--active");
    document.body.style.overflow = "visible";
    show.style.overflowY = "hidden";
}
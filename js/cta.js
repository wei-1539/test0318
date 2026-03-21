const cta = document.getElementById("cta");


window.addEventListener("scroll", function () {
    //要在哪出現
    let afterFV = document.getElementById("ctaStart").offsetTop;
    //要在哪消失
    let offerClose = document.getElementById("ctaEnd").offsetTop;
    // let cta = document.querySelector(".cta");

    if (window.scrollY <= afterFV) {
        cta.style.display = "none";
    } else if (window.scrollY >= offerClose) {
        cta.style.display = "none";
    } else {
        cta.style.display = "block";
    }
});
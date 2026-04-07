document.addEventListener("DOMContentLoaded", ()=>{
    const mainHeader = document.querySelector("header");
    const innerHeader = mainHeader?.querySelector(".header__row");



    // list of body classes that should trigger dark mode
    const darkPages = ["png-page-about-us", "png-page-scent-guide"];
    
    const bodyClasses = document.body.classList;

    // check if body contains any of the darkPages classes
    const shouldApplyDark = darkPages.some(cls => bodyClasses.contains(cls));

    if (shouldApplyDark && mainHeader) {
        mainHeader.classList.add("dark-mode");
        console.log("Dark mode applied to header");
    }

});
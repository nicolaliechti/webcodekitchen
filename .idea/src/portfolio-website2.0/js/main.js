// Navigation Function
function menuFunction(){
    var menuBtn = document.getElementById("navMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Scroll Animation

const sections = document.querySelectorAll(".featured-box")

window.addEventListener("scroll", checkFeaturedBox);

checkFeaturedBox();
function checkFeaturedBox() {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach((featuredBox) => {
        const featuredBoxTop = featuredBox.getBoundingClientRect().top;

        if (featuredBoxTop < triggerBottom) {
            featuredBox.classList.add("show");
        } else {
            featuredBox.classList.remove("show");
        }
    });
}

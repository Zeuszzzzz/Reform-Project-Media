//nav bar
const items = [...document.querySelectorAll("a")].slice(1);
const active = document.querySelectorAll("a")[0]
let distanceLeft, distanceTop, elemWidth, elemHeight;

(function reset() {
    active.style.left = `${items[0].offsetLeft}px`;
    active.style.top = `${items[0].offsetTop}px`;
    active.style.width = `${items[0].clientWidth}px`;
    active.style.height = `${items[0].clientHeight}px`;
})();

items.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        distanceLeft = elem.offsetLeft;
        distanceTop = elem.offsetTop;
        elemWidth = elem.clientWidth;
        elemHeight = elem.clientHeight;

        active.style.width = `${elemWidth}px`;
        active.style.height = `${elemHeight}px`;
        active.style.left = `${distanceLeft}px`;
        active.style.top = `${distanceTop}px`;
    });
});
//nav bar end

//timeline start
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("visible", entry.isIntersecting)
        })
    },
    {
        threshold: 0.1,
    },
);
document.querySelectorAll(".timeline-event").forEach((element) => observer.observe(element));
//timeline end
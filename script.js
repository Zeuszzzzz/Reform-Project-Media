//nav bar
const links = [...document.querySelectorAll("nav a")];
const active = links[0]; // first <a> is the active indicator
const items = links.slice(1); // clickable links

function moveActiveTo(elem) {
    active.style.position = "absolute";
    active.style.pointerEvents = "none";
    active.style.left = `${elem.offsetLeft}px`;
    active.style.top = `${elem.offsetTop}px`;
    active.style.width = `${elem.offsetWidth}px`;
    active.style.height = `${elem.offsetHeight}px`;
}

// On page load, get saved index from localStorage or default to 0
const savedIndex = parseInt(localStorage.getItem("activeNavIndex")) || 0;
moveActiveTo(items[savedIndex]);

items.forEach((item, index) => {
    item.addEventListener("click", () => {
        localStorage.setItem("activeNavIndex", index);
        moveActiveTo(item);
    });
});

//nav bar end

//timeline start
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("visible", entry.isIntersecting);
        });
    },
    {
        threshold: 0,
    }
);
document.querySelectorAll(".event").forEach((element) => {
        observer.observe(element);
    }
);
//timeline end

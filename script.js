document.addEventListener("DOMContentLoaded", function(){
    const burger = document.querySelector('.burger')
    const middle = document.querySelector('.middle')
    const inner = document.querySelector('.inner')

    burger.addEventListener('click', () => {
        middle.style.display = 'block'
        inner.style.right = '0'
    })

    middle.addEventListener('click', () => {
        middle.style.display = 'none'
        inner.style.right = '-100%'
    })

    const dropdown = document.querySelector(".dropdown");
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");
    select.addEventListener("click", () => {
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate");
        menu.classList.toggle("menu-open")
    })
    options.forEach(option => {
        option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
        options.forEach(option => {
            option.classList.remove("active")
        })
        option.classList.add("active")
        })
    })

    const sections = document.querySelectorAll(".info-about");
    const prevButtons = document.querySelectorAll(".controls svg:first-child");
    const nextButtons = document.querySelectorAll(".controls svg:last-child");

    let currentIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    function prevSection() {
        currentIndex = (currentIndex === 0) ? sections.length - 1 : currentIndex - 1;
        showSection(currentIndex);
    }

    function nextSection() {
        currentIndex = (currentIndex === sections.length - 1) ? 0 : currentIndex + 1;
        showSection(currentIndex);
    }

    prevButtons.forEach(button => button.addEventListener("click", prevSection));
    nextButtons.forEach(button => button.addEventListener("click", nextSection));

    showSection(currentIndex);

    const elementsToAnimate = document.querySelectorAll(".animate-on-observe")

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active")
                } else {
                    entry.target.classList.remove("active")
                }
            })
        })
    
        elementsToAnimate.forEach((element) => observer.observe(element))
})
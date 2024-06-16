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
})
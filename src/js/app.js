const loader = document.querySelector('.loader')
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('no-js')
    document.body.classList.add('js')
    loader.classList.add('fadeOut')
})
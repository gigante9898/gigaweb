let sections = document.querySelectorAll('div');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 450;
        let height = sec.offsetHeight;
        
        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
            /*console.log("Top es " + top)
            console.log("offset es " + offset)
            console.log("altura es " + height)*/
        }
        // if want to use repeating animation on scroll, use this
        else {
            sec.classList.remove('show-animate');

        }
    })
}
function debounce(func, wait=50, immediate=true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};



function scrollerProp(){
    images.forEach(images = {
        const slideInAt = window.scrollY + window.innerHeight);
        console.log(slide)
    })
}



document.addEventListener('scroll', debounce(scrollerProp));

const images = document.querySelectorAll('.images')

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



function scrollerProp(e){
    images.forEach(image => {
        //half way to image
        const slideInAt = (window.scrollY + window.innerHeight) - (image.height/2);

        //bottom of the image
        const imageBottom = image.offsetTop + image.height;
        const isHalfShown  = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            image.classList.add('active');
        }
        else {
            image.classList.remove('active');
        }
    })
}



document.addEventListener('scroll', debounce(scrollerProp));

const images = document.querySelectorAll('.images')

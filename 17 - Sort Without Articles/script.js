const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];



const articles = ['The', 'An', 'A']
articleSlicer = (item) => {

    if (articles.includes(item.split(' ')[0])) {
        item = item.split(' ').slice(1).join(' ');
    }
    return item
}


const sortedBands = bands.sort((a,b) => articleSlicer(a) > articleSlicer(b) ? 1 : -1);

solution = document.querySelector('.solution')

sortedBands.map(band => solution.innerHTML+= `<li>${band}</li>`)



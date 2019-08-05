const list_items = Array.from(document.querySelectorAll('li'));

const calcSecs = (item) => {
    let temp = item.dataset.time.split(':');
    let totalSec = (parseInt(temp[0])*60) + parseInt(temp[1]);
    return totalSec;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue

const seconds = list_items.map(item=> calcSecs(item)).reduce(reducer)

const totalHours = Math.floor(seconds/3600)

const totalMins = Math.floor((seconds % 3600)/60)

const totalSecs = (seconds % 3600) % 60

console.log(`Total time -  ${totalHours}:${totalMins}:${totalSecs}`)

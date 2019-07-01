const checkboxes = document.querySelectorAll('.option')
 //converting node list to array
const checkboxList = [...checkboxes];

// tracker to check if shift key is pressed or not
let shiftFlag = false;

shiftTracker = ()=> {
    if (event.shiftKey) {
    shiftFlag = true;
    }
    else {
    shiftFlag = false;
  }
}

//select all item above upto previous selected item
const selectAbove = (checkedIndex) => {
    const sliceAbove = checkboxList.slice(0,checkedIndex); //slice upto the checked item
    const prevCheckedAbove = [...sliceAbove].reverse().find(item=> item.checked); //find the first item selected while searching from bottom to top
    const aboveIndex = checkboxList.indexOf(prevCheckedAbove);  //get the index of the item in main checkbox list
    //if shift flag is true and at least one item above is checked-> checkmark all item upto the check item
    if (sliceAbove.some(checkbox=> checkbox.checked) && shiftFlag) {
        checkboxList.slice(aboveIndex, checkedIndex).forEach(checkbox => checkbox.checked = true);
        }
}

//select all item below upto previous selected item
const selectBelow = (checkedIndex) => {
    const sliceBelow = checkboxList.slice(checkedIndex+1, checkboxList.length) //slice from checked item to below
        const prevCheckedBelow = sliceBelow.find(item=>item.checked); //find the first item going from top that is checked
        const belowIndex = checkboxList.indexOf(prevCheckedBelow); //get the index of the item in main checkbox list
        //if shift flag is true and at least one item below is checked-> checmark all item upto the checked item
         if (sliceBelow.some(checkbox=> checkbox.checked) && shiftFlag) {
            checkboxList.slice(checkedIndex, belowIndex).forEach(checkbox => checkbox.checked = true);
        }

}

//selects and checks item based on shift
const shiftSelect = () => {

    if (event.target.checked === true) {
        const checkedIndex = checkboxList.findIndex(checkbox=> checkbox.id === event.target.id); //get index of selected checkbox
        selectAbove(checkedIndex);
        selectBelow(checkedIndex);


}


}

checkboxes.forEach(checkbox => checkbox.addEventListener('change', shiftSelect));
document.addEventListener('keydown', shiftTracker)


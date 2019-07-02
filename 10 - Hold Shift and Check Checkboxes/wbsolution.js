const checkboxes = document.querySelectorAll('input[type="checkbox"]')

let lastChecked;

function handleCheck(e) {
    //check if they had the shift key down
    //and check if they are checking the checkbox
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;

}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

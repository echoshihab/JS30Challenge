const inputs = document.querySelectorAll('input')


const updateImg = () => {
    //console.log(this.event.target.value); checking to see if i am getting input values

    const newValue = this.event.target.value; //get the value
    const selectedInputId = this.event.target.id;  //get the id


    if (selectedInputId == 'color') {
        document.documentElement.style.setProperty(`--${selectedInputId}`, newValue);
    } else {

        document.documentElement.style.setProperty(`--${selectedInputId}`, `${newValue}px`);
         //add px to the value so that blur and spacing can work
    }



}


inputs.forEach(input => input.addEventListener("change", updateImg));

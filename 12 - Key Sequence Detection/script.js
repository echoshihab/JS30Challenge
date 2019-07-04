const keys = [];
const secret = 'abracadabra';
const prize = document.querySelector('.prize')

function keylogger(e){
    if (keys.length === secret.length) {
        keys.shift()          //remove keys from beginning of array if
    }
    keys.push(e.key);
    if (keys.join("") === secret) {
        prize.innerText+='Congratulations, you have entered the secret key ';
    }
}

document.addEventListener('keyup', keylogger)


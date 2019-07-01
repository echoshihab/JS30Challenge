const changeText = () => {
    event.target.style.color = 'coral';
    event.target.style.fontSize = '40px';
    event.target.style.textShadow = '2px 2px #ff0000';
}


const dogs = [
    {name: 'Tess',
    age : '1y'},
    {name: 'Gubben',
    age: '2y'}
];


document.querySelector('.changeThis').addEventListener('click', changeText)

//tested break on -> attribute  modifications with above code.


//regular
console.log('Just a regular console log')


//Interpolated
const varTest = 'Test Name';
console.log(`Hello I am ${varTest}`);

//styled
console.log('%c style me', 'font-size:12px; color:red;')


//warning
console.warn('testing warning');


//error!
console.error('Show a error');


//info
console.info('check this information')


//Testing
const correctData = 'correct';
const incorrectData = 'incorrect';
console.assert(correctData === 'correct', 'Assertion Failed')
console.assert(incorrectData === 'correct', "assertion that incorrectData equals 'correct' is not correct" )


//clearing
//console.clear()

//viewing DOM elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

//groupings together
dogs.forEach(dog=>{
    console.group(`${dog.name}`);
    console.log(`Name: ${dog.name}`);
    console.log(`Age: ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
    });

//counting
const nameArray = ['Steve', 'John', 'Jenny', 'Steve', 'Jenny'];

nameArray.forEach(name=> console.count(name));

//timing
console.time('fetching JSON data');
fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching JSON data');
        console.log(data);
    });


//table
console.table(dogs);

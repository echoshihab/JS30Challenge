//numbers
let age = 100;
let age2 = age;

console.log(age,age2); //100, 100

age = 200;
console.log(age,age2) //100, 200

//string
let name = 'shihab'
let name2 = name
console.log(name, name2) //shihab, shihab
name = 'khan'
console.log(name, name2) //khan, shihab

// arrays
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const team  = players;

console.log(players, team);

team[3] = 'Lux';

console.log(team); //['Wes', 'Sarah', 'Ryan', 'Lux']
console.log(players); //['Wes', 'Sarah', 'Ryan', 'Lux'] so not the same behavior as number/string as shown above

const players2 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team2 = players2.slice();
//alternative1: team2 = [].concat(players2)
//alternative 2: team2 = [...players2]
//alternative 3: team2 = Array.from(players2)
//all of these alternatives creat a duplicate of the array without changing the original array

team2[3] = 'Lux' ;


console.log(players2, team2) //output ['Wes', 'Sarah', 'Ryan', 'Poppy'] ['Wes', 'Sarah', 'Ryan', 'Lux']

//objects

const person = {
    name: 'Shihab Khan',
    age: 80
};

//const captain = person;
//captain.number = 99; this makes a reference to the original one not a copy.

//how do we make a copy?
const captain2 = Object.assign({}, person, {number: 99});

console.log(captain2, person);  //in this way person object is not changed since captain2 is a copy.

const captain3 = {...person}; //also makes a copy just like array
console.log(captain3);


const shihab = {
    name : 'Shihab',
    age : '34',
    social: {
        twitter: '@shihab',
        facebook: 'shihab'
    }
}


//const newShihab = Object.assign({}, shihab)

//newShihab.social.twitter  = '@skhan';

//console.log(newShihab, shihab)
//we can see in teh above console log, that shihab object is modified and twitter has updated to @skhan. This is because the
//object assign copy goes only one level deep. We could use functions to perform deep cloning, but in most cases this is
//unnecessary

//poor man's deep clone
const newShihab2 = JSON.parse(JSON.stringify(shihab))
newShihab2.social.twitter = '@skhan';
console.log(newShihab2, shihab);
//this works because we first convert shihab to a string object and then convert back to an object.




const name = 'Max'; // Strings
let age = 29; // Numbers
const hasHobbies = true; // Booleans

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' +
        userAge + 
        ' and the user has hobbies: ' +
        userHasHobby
    );
}

//const add = (a,b) => a + b;
//const addOne = a => a + 1;
const addRand = () => 1 + 2;

console.log(addRand(1));

console.log(summarizeUser(name,age,hasHobbies));
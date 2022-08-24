/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const dog = {
    species: 'dog',
    name: 'Tom',
    gender: 'male',
    greeting: 'Howl!',
    legs: 4,
    hands: 0,
};

const cat = {
    species: 'cat',
    name: 'Kitty',
    gender: 'female',
    greeting: 'Meow!',
    legs: 4,
    hands: 0,
};

const woman = {
    species: 'human',
    name: 'Jessy',
    gender: 'female',
    greeting: 'Hello!',
    legs: 2,
    hands: 2,
};

const man = {
    species: 'human',
    name: 'Ted',
    gender: 'male',
    greeting: 'Hello my dear!',
    legs: 2,
    hands: 2,
};

const arrayOfInhabitants = [dog, cat, woman, man];

const arrayOfKeys = ['species', 'name', 'gender', 'greeting', 'legs', 'hands'];

const pullValuesOfObj = (obj) => {
    const array = [];

    arrayOfKeys.forEach((key) => array.push(obj[key]));

    return array;
};

arrayOfInhabitants.forEach((inhabitant,) => {
    const arrayOfValues = pullValuesOfObj(inhabitant);

    const stringToPrint = arrayOfValues.join('; ') + ' ;';

    print(stringToPrint);
});


// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */



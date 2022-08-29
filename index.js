/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's GitHub pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
class Inhabitant {
    constructor(species, name, gender, greeting, legs) {
        this.species = species;
        this.name = name;
        this.gender = gender;
        this.greeting = greeting;
        this.legs = legs;
    }
}

class Human extends Inhabitant {
    constructor(name, gender, greeting, legs, hands) {
        super(name, gender, greeting, legs);
        this.species = 'human';

        this.hands = hands;
    }
}

const dog = new Inhabitant('dog', 'Tom', 'male', 'Howl!', 4);
const cat = new Inhabitant('cat', 'Kitty', 'female', 'Meow!', 4);
const woman = new Human('Jessy', 'female', 'Hello!', 2, 2);
const man = new Human('Ted', 'male', 'Hello my dear!', 2, 2);

const arrayOfInhabitants = [dog, cat, woman, man];

const arrayOfKeys = ['species', 'name', 'gender', 'greeting', 'legs', 'hands'];

const pullValuesOfObj = (obj) => {
    const array = [];

    arrayOfKeys.forEach((key) => {
        obj[key] && array.push(obj[key])
    });

    return array;
};


arrayOfInhabitants.forEach((inhabitant,) => {
    const arrayOfValues = pullValuesOfObj(inhabitant);

    console.log(arrayOfValues);

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



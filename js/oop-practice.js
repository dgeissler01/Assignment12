// STEP 1
// function Cat() {
//     window.console.log('The cat has been created');
// };

// let Dog = function () {
//     window.console.log('The dog has been created');
// }

// STEP 2
// let tabby = new Cat();
// let shephard = new Dog();

// STEP 3
// let Animal = function () {
//     this.bird = console.log('The bird has been created.');
// }
// Animal();

// STEP 4
// let Animal = function (type) {
//     this.type = type;
//     Animal.prototype.create = function () {
//         console.log(`The ${this.type} has been created.`);
//     }
// }
// let bird = new Animal('Crow');
// let dog = new Animal('German Shephard');
// bird.create();
// dog.create();

// STEP 5
// let Animal = function (type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;

//     Animal.prototype.info = function () {
//         console.log(`Benny the ${color} ${breed} is a ${height}' tall ${type} and he is ${length}' long.`);
//     }
// }
// let benny = new Animal('dog', 'mastiff', 'black', '4', '5');
// benny.info();

// STEP 6
// let Animal = function (type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;

//     Animal.prototype.info = function () {
//         console.log(`Benny the ${color} ${breed} is a ${height}' tall ${type} and he is ${length}' long.`);
//     }
// }

// let benny = new Animal('dog', 'mastiff', 'black', '4', '5');
// benny.info();

// for (const key in benny) {
//     if (benny.hasOwnProperty(key)) {
//         const element = benny[key];
//         console.log(element);
//     }
// }

// STEP 7
// let Animal = function (type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;

//     Animal.prototype.info = function () {
//         console.log(`Benny the ${color} ${breed} is a ${height}' tall ${type} and he is ${length}' long.`);
//     };

//     Animal.prototype.speak = function () {
//         if (new Animal === dog) {
//             console.log('The dog barks.');
//         } else (new Animal === cat) 
//             console.log('The cat meows.');
//         };
//     };
//     let dog = new Animal();
//     let cat = new Animal();

//     cat.speak();

// out of time

// STEP 8

// STEP 9
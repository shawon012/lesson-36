// create object using object literals
const player = {};
player.name = 'Small Nirob';
// object ar vitore avabe use korake bola hoy properties
player.speciality = 'batsman';
player.bat = function(){
    console.log('swing your bat');
}
// object ar vitore avabe use kora ke bola hoy mehtod
console.log(player);
player.bat();

const student = {
    name: 'Pandey',
    job: 'Khai andey',
    ball: function(){
        console.log('throw the ball')
    },
    salary: 100000
    }

// object constructor
// const person = new Object();
// console.log(person);

// object create method

// const item = Object.create(null);
// console.log(item);


// const atel = Object.create(student);
// console.log(atel);

const atel = Object.create(student);
console.log(atel.name);


// class
class person{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}
const person1 = new person(56)
console.log(person1);

// function 
function car(model, price){
    this.model = model;
    this.price = price;
}
const tesla = new car('elon', 32);
console.log(tesla);
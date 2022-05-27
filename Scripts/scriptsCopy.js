console.log('hello');

alert('hello');

console.log('hello');
// alert('hello');

// variable declaration (variable definition) containers for storing data (storing data values).
let firstName;
console.log(firstName);

// variable instantiation
let lastName = "Cumbo";
console.log(lastName);

firstName = "Matthew";
console.log(firstName);

console.log(typeof(firstName));

firstName = 1;
console.log(typeof(firstName));


let number1, number2;
let num3 = 3, num4;

let num5;
let num6;



const  interestRate = 0.3;
//interestRate = 1;


// Objects
let person = {
    firstName : 'Matt',
    lastName : 'Cumbo',
    age : 30
};

console.log(person);

// Dot Notation
console.log(person.age);
// Bracket Notation
console.log(person['age']);

let propertyName = 'wheels';
let car= {
    wheels: 4,
    doors:4
};
console.log(car[propertyName]);


let colors = ['green','blue'];
console.log(colors);

colors[0] = 'red';
console.log(colors);
console.log(colors[1]);



function alertName(firstName) {
    alert(firstName);
}



let heading = document.getElementById('logoChangeName');
console.log(heading);
console.log(heading.innerHTML);

heading.innerHTML = "Profile Name";

console.log(heading.classList);
heading.classList.remove('blueHeading');
console.log(heading.classList);
heading.classList.add('redHeading');
console.log(heading.classList);

function changeName() {
   let name = document.getElementById('logoChangeName');
   name.innerHTML= "Kaia";
}


// to create a loop  this type of loop can be used for lists 

let cars = ['Ferrari', 'Lamborghini', 'Rolls Royce'];
for (let counter = 0; counter < 10; counter++) {
    console.log(counter); 
}

cars.forEach (function (val) {
    alert(val)
}
    )

let  = [];
for (let counter = 0; counter < 10; counter++) {
    console.log(counter) }




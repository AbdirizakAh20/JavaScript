// const product = {
//     name: "Gummy Bears",
//     inStock: true,
//     price: 1.99,
//     flavors: ["grape", "apple", "cherry"]
// };
// console.log(product);

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

const fullAddress = 
    `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

console.log(fullAddress);

const theater = {
    name: 'Starlight Cinema',
    street: `${Math.floor(Math.random() * 500) + 1} Maple Street`,
    city: 'Austin',
    state: 'TX',
    zipcode: '78701',
    screens: 12,
};

const theaterAddress = 
    `${theater.street}, ${theater.city}, ${theater.state} ${theater.zipcode}`;

console.log(theaterAddress);

const theaterInfo =
    `${theater.name} has ${theater.screens} screens and is located in ${theater.city}, ${theater.state}.`;

console.log(theaterInfo);

function printExclamation() {
    console.log("!!");
}

printExclamation();

function sayHello() {
    console.log("Hello, world!");
}

sayHello();

function printCheer() {
    console.log("Go team!");
    console.log("We got this!");
}

printCheer();
printCheer();
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

function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
};

rant("i hate beets");

function whisper(message) {
    console.log(message.toLowerCase());
    console.log(message.toLowerCase());
};

whisper("PLEASE BE QUIET");

function announce(item) {
    console.log(`Now serving: ${item.toUpperCase()}!`);
}

announce("pizza");
announce("tacos");

function isSnakeEyes(dice1, dice2) {
    if (dice1 === 1 && dice2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

isSnakeEyes (1, 1); // Snake Eyes!
isSnakeEyes (1, 4); // Not Snake Eyes!
isSnakeEyes (4, 5); // Not Snake Eyes!

function isBoxcars (dice1, dice2) {
    if (dice1 === 6 && dice2 === 6) {
        console.log("Boxcars!");
    } else {
        console.log("Not Boxcars!");
    }
}

isBoxcars (6, 6); // Boxcars!
isBoxcars (6, 4); // Not Boxcars!
isBoxcars (6, 5); // Not Boxcars!

function isDoubles (dice1, dice2) {
    if (dice1 === dice2) {
        console.log("Doubles!");
    } else {
        console.log("No doubles.");
    }
}

isDoubles (3, 3); // Doubles!
isDoubles (6, 6); // No doubles.
isDoubles (5, 4); // No doubles.

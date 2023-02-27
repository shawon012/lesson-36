const numbers = [12, 54, 65, 3, 54];
for(const number of numbers){
    console.log(number);
};

const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// for (const key of bottle){
//     console.log(key);
// }
// for of can not be used on objects

const keys = Object.keys(bottle);
console.log(keys);
for(const key of keys){
    console.log(key, bottle[key]);
}

// for in loop

for(const key in bottle){
    const value = bottle[key];
    // console.log(key, value);
}

const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}

// for in chalate hobe object ar upore ar for of chalate hobe array ar upore
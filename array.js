const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


//  ___________________________MAP________________________________________

// 1. Get an array of all names
let charNames = characters.map((singleItems) =>{
    return singleItems.name
})
console.log(charNames);


// 2. Get an array of all heights
let charHeights = characters.map((char) => {
    return char.height;
})
console.log(charHeights);


// 3. Get an array of objects with just name and height properties
let charNameHeights = characters.map((charac) => {
    return { name: charac.name,
    Height: charac.height};
})
console.log(charNameHeights);


// 4. Get an array of all first names

let charFirstNames = characters.map((singleItems) =>{
    return singleItems.name.split(' ')[0];
})
console.log(charFirstNames);



//  ___________________________Filter________________________________________



// 1. Get characters with mass greater than 100
let massGreaterThan100 = characters.filter((singleItems) =>{
    return singleItems.mass > 100;
})
console.log(massGreaterThan100);



// Get characters with height less than 200
let HeightLessThan200 = characters.filter((nums)=>{
    return nums.height < 200;
})

console.log(HeightLessThan200);
// Get all male characters
let allMaleChar = characters.filter((nums) => {
 return nums.gender === 'male'
})

console.log(allMaleChar);

// Get all female characters

let allFemaleChar = characters.filter((nums) => {
    return nums.gender === 'female'
   })
   
   console.log(allFemaleChar);
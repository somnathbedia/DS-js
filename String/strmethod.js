const userName = "Somnath Bedia";

let nicName = userName.slice(0,3);

// console.log(`Nick name of ${userName} is ${nicName}`);

// slice string with -ve number which is starts from the last letter of the string

let partOfUname = userName.slice(-8,-2);
// console.log(partOfUname);

const fullName = 'Somnath Bedia';
const surname = fullName.substring(8,fullName.length+1);
// console.log(surname);

const role = 'developer';
//this methid won't change the original string in the stack
// const updatesRole = role.replace('d','D');
// console.log(updatesRole);
// const transform = role.replaceAll('e','E');
// console.log(transform);

// let para = document.getElementById("quotes");
// para.style.color="red";
// const text = para.innerText;
// console.log(text.toUpperCase());

const randomText = 'The International Numner of one bestseller';
// console.log(randomText.trim());

const bag = 'rock paper scissor';
const slogan = 'A well-written and practical, guide to the, emotion';
console.log(bag.split(' '));
console.log(slogan.split(','));
console.log(slogan.indexOf('g'));
console.log(slogan.lastIndexOf('l'));
console.log(slogan.indexOf('e',5));

// This method returns boolean value
console.log(slogan.includes('well'));





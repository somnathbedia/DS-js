const favnumber = 12;
let evenNumber = favnumber;

// evenNumber = 14;

let user = {
    username : 'somnathswd',
    email : 'somnath@googlemail.com',
    address : {Area : 'Kokar',street : 'Bank colony'}
}

let randomUser = user;
randomUser['email'] = 'randommail@outlook.com';

console.log(user);
console.log(randomUser);
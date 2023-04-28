 const instaUser = {
    userName : "somnathswd",
    password : "12345@#$",
    "fullName" : "Somnath Bedia",
    email : "somnath3@gmail.com",
    isLoggedIn : false,
    permanentLoaction : "Ranchi",
    visitedPlace : ["Jamshedpur","Ramgarh","Gumla","Jhalida"],
    favCars : ["Audi","Mercedes","BMW","Supra"],
    loginStatus : function(){
        if(this.isLoggedIn === true){
            console.log(`${this.userName} is logged in the system`);
            return true;
        }else{
            console.log(`Please log in`);
            return false;
        }
    },
    permanentAddress : {village : "Chota Muri",PO : "Bada Muri",PS : "Silli"}
}


const login = (user) => {
    if(user.isLoggedIn === false){
        const status = confirm("Click ok to log in");
        console.log(`${user.userName} log in successfull`);
        return true;
    }else{
        console.log(`${user.userName} logged in`);
        return;
    }
}

console.log(instaUser);
console.log(instaUser["favCars"][0]);
console.log(instaUser["password"]);
console.log(instaUser.loginStatus(true));

// passing user object
// login(instaUser);

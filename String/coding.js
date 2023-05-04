const browserType = "mozilla firefox";
const browserType2 = "google chrome";
// console.log(browserType.length);
// console.log(browserType2.length);

function rank(browser1,browser2){
    let obj = {};
    if(browser1.length > browser2.length){
        obj[`${browser1}`] = 1;
        console.log(`${browser1} is great`);
    }else{
        console.log(`${browser2} is great`);
        obj[`${browser2}`] = 1;
    }
    return obj;
}

// console.log(rank(browserType,browserType2));

// ##### Testing if a string contains a substring #####
const browserIndentifier = (browser) =>{
    if(browser.includes('firefox')){
        console.log("you'r working with firefox borwser");
    }else{
        console.log('visiting wrong browser');
    }
}

// browserIndentifier(browserType);


// ### finding position of a substring in a larger string

const tagline = 'MDN - Resources for developers, by developers';
// console.log(tagline.indexOf('developers',31));


// @@@@@@@@@@@@@@@@@@@@@@@@@@ 
// const firstStr = prompt("Enter somthing");
// const secondStr = prompt("Enter somthing");

const transform = (str1,str2) =>{
    // const value1 = str1.toUpperCase();
    // const value2 = str2.toUpperCase();
    if(str1.toUpperCase() == str2.toUpperCase()){
        return true;
    }
    // return {value1,value2}
}

// console.log(transform(firstStr,secondStr));

const strPrm = String('somnath');
// console.log(strPrm);

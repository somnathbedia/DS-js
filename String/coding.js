const browserType = "mozilla firefox";
const browserType2 = "google chrome";
// console.log(browserType.length);
// console.log(browserType2.length);

function rank(browser1,browser2){
    if(browser1.length > browser2.length){
        console.log(`${browser1} is great`);
    }else{
        console.log(`${browser2} is great`);
    }
}

rank(browserType,browserType2);

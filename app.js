const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3));


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};


function fromEuroToDollar(euro){
    return euro *= oneEuroIs.USD;
}

function fromDollarToYen(dollar) {
    let DtoE = dollar /= oneEuroIs.USD;
    let DtoY =  DtoE *= oneEuroIs.JPY
    return Number(DtoY.toFixed(1));
}


function fromYanToPound(yan) {
    let YtoE = yan /= oneEuroIs.JPY;
    let YtoP = YtoE *= oneEuroIs.GBP;
    return Number(YtoP.toFixed(2));
}
console.log(fromYanToPound(1000))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYanToPound }


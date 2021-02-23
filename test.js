const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});



test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
});

test("One euro should be 106.58 dollars", function(){

    const { fromDollarToYen } = require('./app.js')

    const dollars = fromDollarToYen(5)

    const expected = 5 * 106.58; 
    
    expect(expected).toBe(dollars);
});


test("One dollar should be 106.58 dollars", function(){

    const { fromDollarToYen } = require('./app.js')

    const dollars = fromDollarToYen(5)

    const expected = 5 * 106.58; 
    
    expect(expected).toBe(dollars);
});



test("One yen should be 0.00625 pound", function(){

    const { fromYanToPound } = require('./app.js')

    const yens = fromYanToPound(1000)

    const expected = 1000 * 0.00625; 
    
    expect(expected).toBe(yens);
});

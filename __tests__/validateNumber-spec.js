const funcMap = require('../validateNumber');



it ('should validate if existing', () => {

    const barcode = "0003";
    // const secondNumber = 3;
    let result = funcMap.CheckIfExisting(barcode);
    // console.log(number);
    expect(result).toBe(true);
});



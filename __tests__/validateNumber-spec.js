const funcMap = require('../validateNumber');



it ('should validate if existing', () => {

    const barcode = "0003";
    // const secondNumber = 3;
    let result = funcMap.CheckIfExisting(barcode);
    // console.log(number);
    expect(result).toBe(true);
});

it ('should retrieve the price of the product', () => {

    const barcode = "0003";
    // const secondNumber = 3;
    let result = funcMap.CheckPrice(barcode);
    // console.log(number);
    expect(result).toBe(5);
});

it ('should retrieve the quantity of the product', () => {

    const barcode = "0003";
    // const secondNumber = 3;
    let result = funcMap.CountQuantity(barcode);
    // console.log(number);
    expect(result).toBe(1);
});

it ('should compute total price', () => {

    const barcodes = ['0001', '0003', '0005', '0003'];
    // const secondNumber = 3;
    let result = funcMap.ComputeTotalPrice(barcodes);
    // console.log(number);
    expect(result).toBe(20);
});

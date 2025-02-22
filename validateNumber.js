
    const db = [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ];

function CheckIfExisting (barcode) {


    for(let i = 0; i < db.length; i++)
    {
        if(String(db[i].id) === String(barcode))
        {
            // console.log(db[i].id);
            return true;
        }
        
    }

    return false;
}

function CheckPrice(barcode)
{
    for(let i = 0; i < db.length; i++)
    {
        if(String(db[i].id) === String(barcode))
        {
            // console.log(db[i].id);
            return db[i].price;
        }
        
    }

    return 0;

}

function CountQuantity(barcode)
{
    let quantity = 0;
    for(let i = 0; i < db.length; i++)
    {
        if(String(db[i].id) === String(barcode))
        {
            // console.log(db[i].id);
            quantity += 1;
        }
        
    }
    return quantity;
}

function ComputeTotalPrice(barcodes)
{
    let totalPrice = 0;
    for(let i = 0; i < db.length; i++)
    {

            // console.log(db[i].id);
            totalPrice += CheckPrice(barcodes[i]);

        
    }
    return totalPrice;

}

module.exports = {
    CheckIfExisting : CheckIfExisting,
    CountQuantity : CountQuantity,
    CheckPrice : CheckPrice,
    ComputeTotalPrice : ComputeTotalPrice

    // checkIfInRange : checkIfInRange,
    // MultiplyNumbers : MultiplyNumbers
};

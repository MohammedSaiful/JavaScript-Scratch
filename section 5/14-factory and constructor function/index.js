

let address=createAddress('a', 'b', 'c');
console.log(address);

// factory function
function createAddress(street, city, zipcode)
{
    return{
        street,
        city,
        zipcode
    };
}




// constructor functions
function Address(street, city, zipcode)
{
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}

let address1=new Address('a', 'b', 'c');
console.log(address1);

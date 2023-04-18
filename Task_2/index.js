const userUrl = 'https://fakestoreapi.com/users';
const cartUrl = 'https://fakestoreapi.com/carts';
const productUrl = 'https://fakestoreapi.com/products';

const {
    valueOfCategories,
    findHighestCartValue,
    findFurthestUsers
} = require('./func.js');

Promise.all([
    fetch(userUrl),
    fetch(productUrl),
    fetch(cartUrl)
]).then(responses => {
    return Promise.all(responses.map(response => {
        return response.json();
    }));
}).then(data => {
    const [userData, productData, cartData] = data;

    console.log('User Data:', userData);

    console.log('Product Data:', productData);

    console.log('Cart Data:', cartData);

    console.log('Value of Categories:', valueOfCategories(productData));
    console.log('A cart with highest value:', findHighestCartValue(userData, cartData, productData));
    console.log('Furthest Users:', findFurthestUsers(userData));

}).catch(error => {
    console.error('Error fetching data:', error);
});

module.exports = {
    valueOfCategories,
    findHighestCartValue,
    findFurthestUsers
}

///////////////////////////////////////////////
//###########################################//
//####    To run unit tests pleas run    ####// 
//####    "npm install -g jest"          ####//
//####    "npx jest .\index.test.js"     ####//
//####    commands in Task_1 folder      ####//
//###########################################//
///////////////////////////////////////////////
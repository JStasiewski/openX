///////////////////////////////////////////////
//###########################################//
//####    To run unit tests pleas run    ####// 
//####    "npm install -g jest"          ####//
//####    "npx jest .\index.test.js"     ####//
//####    commands in Task_1 folder      ####//
//###########################################//
///////////////////////////////////////////////

const assert = require('assert');

const {
    valueOfCategories,
    findHighestCartValue,
    findFurthestUsers
} = require('./func');

describe('valueOfCategories', function() {
  it('should return an object with the total value of products for each category', function() {
    const productData = [
      { id: 1, title: 'Product 1', price: 10, category: 'Category 1' },
      { id: 2, title: 'Product 2', price: 20, category: 'Category 1' },
      { id: 3, title: 'Product 3', price: 30, category: 'Category 2' },
      { id: 4, title: 'Product 4', price: 40, category: 'Category 2' }
    ];

    const result = valueOfCategories(productData);

    assert.deepStrictEqual(result, {
      'Category 1': 30,
      'Category 2': 70
    });
  });
});

describe('findHighestCartValue', function() {
  it('should return an object with the highest cart value and full name of its owner', function() {
    const userData = [
      {
        id: 1,
        name: { firstname: 'John', lastname: 'Doe' },
        address: { geolocation: { lat: 52, long: 5 } }
      },
      {
        id: 2,
        name: { firstname: 'Jane', lastname: 'Deen' },
        address: { geolocation: { lat: 51, long: 0 } }
      },
      {
        id: 3,
        name: { firstname: 'Jake', lastname: 'Dope' },
        address: { geolocation: { lat: 51, long: 0 } }
      }
    ];

    const cartData = [
      { userId: 1, products: [{ productId: 1, quantity: 1 }, { productId: 2, quantity: 2 }] },
      { userId: 2, products: [{ productId: 3, quantity: 3 }] },
      { userId: 3, products: [{ productId: 1, quantity: 1 },{ productId: 3, quantity: 2 }]}
    ];

    const productData = [
      { id: 1, title: 'Product 1', price: 10 },
      { id: 2, title: 'Product 2', price: 20 },
      { id: 3, title: 'Product 3', price: 30 }
    ];

    const result = findHighestCartValue(userData, cartData, productData);

    assert.deepStrictEqual(result, {
      id: 2,
      value: 90,
      fullName: 'Jane Deen'
    });
  });
});

describe('findFurthestUsers', function() {
  it('should return an array with the full name of the furthest users', function() {
    const userData = [
      {
        id: 1,
        name: { firstname: 'John', lastname: 'Doe' },
        address: { geolocation: { lat: -37.3159, long: 81.1496 } }
      },
      {
        id: 2,
        name: { firstname: 'Jane', lastname: 'Doe' },
        address: { geolocation: { lat: 20.3467, long: -30.1310 } }
      },
      {
        id: 3,
        name: { firstname: 'Bob', lastname: 'Smith' },
        address: { geolocation: { lat: 50.3467, long: -20.1310 } }
      }
    ];

    const result = findFurthestUsers(userData);

    assert.deepStrictEqual(result, {"user1": "John Doe", 
                                    "user2": "Bob Smith", 
                                    "distance": 133.94958519950706});
  });
});
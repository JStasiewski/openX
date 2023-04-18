function valueOfCategories(productData) {
    const categories = {};

    productData.forEach(product => {
        const { category, price } = product;

        if (categories.hasOwnProperty(category)) {
            categories[category] += price;
        } else {
            categories[category] = price;
        }
    });
    return categories;
}

function findHighestCartValue(userData, cartData, productData) {
    const cartValues = new Map();
  
    cartData.forEach(cart => {
      let cartValue = 0;
      cart.products.forEach(product => {
        const { price } = productData.find(p => p.id === product.productId);
        cartValue += price * product.quantity;
      });
  
      const { userId } = cart;
      cartValues.set(userId, (cartValues.get(userId) ?? 0) + cartValue);
    });
  
    let highestValue = 0;
    let highestUser = null;
    userData.forEach(user => {
      const { id } = user;
      const cartValue = cartValues.get(id) ?? 0;
      if (cartValue > highestValue) {
        highestValue = cartValue;
        highestUser = user;
      }
    });
  
    return {
      id: highestUser.id,
      value: highestValue,
      fullName: `${highestUser.name.firstname} ${highestUser.name.lastname}`
    };
  }
  

function findFurthestUsers(userData) {
    const distances = {};

    for (let i = 0; i < userData.length; i++) {
        for (let j = i + 1; j < userData.length; j++) {
            const user1 = userData[i];
            const user2 = userData[j];

            const distance = Math.sqrt(Math.pow(user1.address.geolocation.lat - user2.address.geolocation.lat, 2) + Math.pow(user1.address.geolocation.long - user2.address.geolocation.long, 2));

            distances[`${user1.id},${user2.id}`] = distance;
        }
    }

    let furthestDistance = 0;
    let furthestUsers = [];
    for (const [key, value] of Object.entries(distances)) {
        if (value > furthestDistance) {
            furthestDistance = value;
            furthestUsers = key.split(',');
        }
    }

    const furthestUser1 = userData.find(user => user.id == furthestUsers[0]);
    const furthestUser2 = userData.find(user => user.id == furthestUsers[1]);

    return {user1:`${furthestUser1.name.firstname} ${furthestUser1.name.lastname}`, user2:`${furthestUser2.name.firstname} ${furthestUser2.name.lastname}`,distance: furthestDistance};
}

module.exports = {
    valueOfCategories,
    findHighestCartValue,
    findFurthestUsers
}
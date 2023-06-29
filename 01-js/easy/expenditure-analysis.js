/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

//list of items generated using chatGPT
const items = [{
  itemName: 'Shirt',
  category: 'Clothing',
  price: 19.99,
  timestamp: '2023-06-28T09:30:00Z'
},
{
  itemName: 'Headphones',
  category: 'Electronics',
  price: 49.99,
  timestamp: '2023-06-27T14:45:00Z'
},
{
  itemName: 'Book',
  category: 'Literature',
  price: 12.99,
  timestamp: '2023-06-26T16:15:00Z'
},
{
  itemName: 'Chair',
  category: 'Furniture',
  price: 89.99,
  timestamp: '2023-06-25T11:20:00Z'
},
{
  itemName: 'Phone',
  category: 'Electronics',
  price: 699.99,
  timestamp: '2023-06-24T08:00:00Z'
},
{
  itemName: 'Sunglasses',
  category: 'Accessories',
  price: 29.99,
  timestamp: '2023-06-23T17:30:00Z'
},
{
  itemName: 'Laptop',
  category: 'Electronics',
  price: 1299.99,
  timestamp: '2023-06-22T13:10:00Z'
},
{
  itemName: 'Watch',
  category: 'Accessories',
  price: 79.99,
  timestamp: '2023-06-21T10:45:00Z'
},
{
  itemName: 'Dress',
  category: 'Clothing',
  price: 39.99,
  timestamp: '2023-06-20T19:20:00Z'
},
{
  itemName: 'Desk',
  category: 'Furniture',
  price: 149.99,
  timestamp: '2023-06-19T12:00:00Z'
}
];

function calculateTotalSpentByCategory(items) {

  var categoryWiseSpending = [];

//loop to make an array that consists of all the categories in which expenditure was done.
  for (let i = 0; i < items.length; i++) {
    //initialising the categoryWiseSpending array<one time thing>
    if (i === 0) {
      var initialPush = {
        category: items[i].category,
        totalSpent: 0
      };
      categoryWiseSpending.push(initialPush);
    }
    //Using inner loop to check in categoryWiseSpending array for similar categories(if found then that category is not added again)
    for (let j = 0; j < categoryWiseSpending.length; j++) {
      var found;
      if (items[i].category === categoryWiseSpending[j].category) {
        found = 1;
        break;
      } else found = 0;
    }
    if (found === 0) {
      var toPush = {
        category: items[i].category,
        totalSpent: 0
      };
      categoryWiseSpending.push(toPush);
    }
  }
 //Final loop to calculate total spent in each category
  for (let i = 0; i < items.length; i++) {
      for( let j = 0; j<categoryWiseSpending.length; j++){
         if(items[i].category===categoryWiseSpending[j].category){
              categoryWiseSpending[j].totalSpent += Math.round(items[i].price);
         }
      }
  }

  return categoryWiseSpending;
}


module.exports = calculateTotalSpentByCategory;
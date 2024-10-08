const fs = require('fs');
const { faker } = require('@faker-js/faker');

const getRandomStore = () => {
  const options = ['Amazon', 'eBay', 'AliExpress'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const generateData = (numItems) => {
  const items = [];
  for (let i = 0; i < numItems; i++) {
    items.push({
      id: faker.database.mongodbObjectId(),
      name: faker.commerce.productName(),
      image: faker.image.avatar(),
      store: getRandomStore(),
      price: faker.commerce.price({ min: 10, max: 2000, dec: 0 }),
      deliveryEstimationDate: faker.date.recent({ days: 30 }),
      received: faker.datatype.boolean(),
    });
  }
  return items;
};

const numberOfItems = 10;
const data = generateData(numberOfItems);

fs.writeFileSync('./src/db/items.json', JSON.stringify(data, null, 2), 'utf-8');

console.log('Data generated successfully!');
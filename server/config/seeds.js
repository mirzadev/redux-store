const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food Items' },
    { name: 'Household Supplies' },
    { name: 'Auto Parts' },
    { name: 'Clothings' },
    { name: 'Gift Items' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Candy Combo',
      description:
        'Variety of tasty Candies of different brand',
      image: 'Variety-Candy.jpg',
      category: categories[0]._id,
      price: 4.99,
      quantity: 400
    },
    {
      name: 'Knorr Soup',
      description:
        'Variety of Knorr Soups with different flavors, 1.5 oz 2 in 1.  ',
      image: 'Knorr-Soups.png',
      category: categories[0]._id,
      price: 3.59,
      quantity: 1000
    },
    {
      name: 'Tin Cookies',
      category: categories[0]._id,
      description:
        'Royal Dansk Danish Cookies Tin, butter, 24 Ounce .',
      image: 'Tasty-Cookies-in-Container.jpg',
      price: 6.99,
      quantity: 600
    },
    {
      name: 'Flogger Coffee',
      category: categories[0]._id,
      description:
        'Folgers, Classic Medium Roast Coffee, 48 oz.',
      image: 'Flagger-Coffee-Classic-Roast.jpg',
      price: 59.99,
      quantity: 50
    },
    {
      name: 'Household Tools Kit',
      category: categories[1]._id,
      description:
        '40-Piece Household Tools Kit - Small Basic Home Tool Set with Plastic Toolbox - Great for College Students, Household Use & More.',
      image: 'Household-Tools-Kit.jpg',
      price: 64.99,
      quantity: 100
    },
    {
      name: 'Scott Tissue Paper',
      category: categories[1]._id,
      description:
        'Scott 1000 Sheets Per Roll Toilet Paper, 36 Rolls.',
      image: 'Scott-Tissue-Paper.jpg',
      price: 25.99,
      quantity: 100
    },
    {
      name: 'Tide Detergent',
      category: categories[1]._id,
      description:
        'Tide Original, 96 Loads Liquid Laundry Detergent, 138 Fl Oz.',
      image: 'Tide-Detergent.jpg',
      price: 22.99,
      quantity: 100
    },
    {
      name: 'Glass Set',
      category: categories[1]._id,
      description:
        'Set of Six Vintage Cut Glass Large Tumblers.',
      image: 'Set-of-Glass.jpg',
      price: 12.99,
      quantity: 200
    },
    {
      name: 'Motor Oil',
      category: categories[2]._id,
      description: 'Battery Jump Starter. NOCO Boost Plus GB40 1000 Amp 12-Volt UltraSafe Lithium Jump Starter Box, Car Battery Booster Pack, Portable Power Bank Charger, and Jumper Cables and many more.',
      image: 'Pennzoil-Motor-Oil.jpg',
      price: 19.99,
      quantity: 300
    },
    {
      name: 'Battery Jump Starter',
      category: categories[2]._id,
      description:
        'NOCO Boost Plus GB40 1000 Amp 12-Volt UltraSafe Lithium Jump Starter Box, Car Battery Booster Pack, Portable Power Bank Charger, and Jumper Cables and many more.',
      image: 'Battery-Jump-Starter.jpg',
      price: 99.99,
      quantity: 100
    },
    {
      name: 'Wheel Tire',
      category: categories[2]._id,
      description:
        'SuperMax TM-1 215/60R17 96 T Tire.',
      image: 'Supermax-Tires.jpg',
      price: 119.99,
      quantity: 100
    },
    {
      name: 'Windshield Cleaning Tools',
      category: categories[2]._id,
      description:
        'Easily clean the inside surface of your windshield with this Windshield Cleaning Tool. Comes with 2 removable, washable and reusable cloth cleaning pads that can be used wet or dry and a 1-oz. spray bottle to fill with tap water or glass cleaner.',
      image: 'Windshield-Cleaning-Kit.jpg',
      price: 15.99,
      quantity: 70
    },
    {
      name: 'Ladies Shirt',
      category: categories[3]._id,
      description:
        'Long-Sleeve Mockneck Top.',
      image: 'Ladies-T-Shirt.jpg',
      price: 89.99,
      quantity: 30
    },
    {
      name: "Men's Shirt",
      category: categories[3]._id,
      description:
        'Fashionable Wide Striped Sport Shirt in Pink for Men – Lyst.',
      image: 'Men-Shirt.jpg',
      price: 49.99,
      quantity: 20
    },
    {
      name: 'Ladies Trouser',
      category: categories[3]._id,
      description: 'NEW Wide-Leg Comfort Trousers.',
      image: 'Ladies-Trouser.jpg',
      price: 99.99,
      quantity: 100
    },
    {
      name: "Men's Trouser",
      category: categories[3]._id,
      description:
        'Rokwear Premium Cargo Trouser.',
      image: 'Fashionable-Trouser-Men.jpg',
      price: 35.99,
      quantity: 60
    },
    {
      name: 'Polarized Sun Glass',
      category: categories[4]._id,
      description:
        'Fishing Polarized Sunglasses for Men Driving Running Golf Sports Glasses Square UV Protection Designer Style Unisex',
      image: 'Polarized-Sunglass.jpg',
      price: 89.99,
      quantity: 200
    },
    {
      name: 'Elite Pen',
      category: categories[4]._id,
      description:
        'Custom pens, engraved gifts, engraved pens, personalized pens for elite personalities.',
      image: 'Custom-Pens.jpg',
      price: 109.99,
      quantity: 70
    },
    {
      name: 'Crystal Eiffel Tower ',
      category: categories[4]._id,
      description:
        'A perfect gift for your friend.',
      image: 'Crystal-Eiffel-Tower.jpg',
      price: 37.99,
      quantity: 100
    },
    {
      name: 'Crystal Feathered Eagle',
      category: categories[4]._id,
      description:
        'Choose a statement piece full of freedom and courage with this exquisite eagle. Depicted in sumptuous clear crystal with 646 facets, it is a dynamic design. Perfect as a stand-alone piece in your home, it would also complement the collection of a nature lover.',
      image: 'Crystal-Eagle.jpg',
      price: 79.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

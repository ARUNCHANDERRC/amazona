import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => { // consists of Users and Products list
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products); // inserting datas from 'data.js' into model folder(Product)
 
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users); // users created statically in data.js
  res.send({ createdProducts,createdUsers });
});

export default seedRouter;

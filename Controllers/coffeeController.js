const express = require('express');
const Coffee = require('../Models/Coffee');

const route = express.Router();


const index = (req,res,next)  => {
	Coffee.find()
	.populate('category')
	.then(categories  => {
		res.json(categories)
	})
	.catch(error  =>{
		res.json({
			message: "an error occured when displaying Coffee :"+error
		})
	})
}


//add coffee
const store = (req,res,next) => {
	let coffee = new Coffee({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price,
		category:req.body.category,
        images:req.body.images,
	})
	coffee.save()
	.then(response => {
		res.json({
			message:"coffee Added Successfully"
		})
	})
	.catch(error  => {
		res.json({
			message: "an error occured when adding coffee"+error
		})
	})
}


route.get('/',index)
route.post('/add',store)

module.exports = route;
const express = require('express');
const Category = require('../Models/Category');

const route = express.Router();


const index = (req,res,next)  => {
	Category.find()
	.then(categories  => {
		res.json(categories)
	})
	.catch(error  =>{
		res.json({
			message: "an error occured when displaying categories :"+error
		})
	})
}


//add category
const store = (req,res,next) => {
	let category = new Category({
		name: req.body.name,
		description: req.body.description,
	})
	category.save()
	.then(response => {
		res.json({
			message:"category Added Successfully"
		})
	})
	.catch(error  => {
		res.json({
			message: "an error occured when adding category"+error
		})
	})
}


route.get('/',index)
route.post('/add',store)

module.exports = route;
import express from 'express';
const router = express.Router();
const path = require('path');

import Restaurant from '../models/restaurant';
import Location from '../models/location';


router.get('/',(req,res)=>{
	Restaurant.find({})
		.then(restaurant=>{
			res.json({restaurant});
		});
});

router.get('/allcuisines',(req,res)=>{
		Restaurant.find().distinct('cuisines', function(error, cuisines) {
	    res.json({cuisines});
	});
});

router.get('/allrestaurants',(req,res)=>{
		Restaurant.find().distinct('restaurant_name', function(error, restaurant_name) {
	    res.json({restaurant_name});
	});
});


router.get('/withcuisines',(req,res)=>{
	const pam=req.query.cuisinevalue;
	Restaurant.find({cuisines:pam})
		.then(restaurant=>{
			res.json({restaurant});
		});
});

router.get('/withrestaurant',(req,res)=>{
	const pam=req.query.resvalue;
	Restaurant.find({$text: { $search: pam }})
		.then(restaurant=>{
			res.json({restaurant});
		});
});



router.get('/singlerestaurant',(req,res)=>{
	const pam=req.query.resid;
	Restaurant.findOne({restaurant_id:pam})
		.then(restaurant=>{
			res.json({restaurant});
		});
});

router.get('/location',(req,res)=>{
	const pam=req.query.resid;
	Location.findOne({restaurant_id:pam})
		.then(location=>{
			res.json({location});
		});
});




export default router;


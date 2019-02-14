show databases;
use restaurantdb;
db.restaurants.find({ 'cuisines' : { $type : 2 } }).forEach(function(x){
	x.cuisines=x.cuisines.split(",").map(str=>str.replace(/^\s*/,""));
	db.restaurants.save(x);
});

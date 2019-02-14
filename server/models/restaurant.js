import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	restaurant_id:{type: Number, default: 0},
	restaurant_name:String,
	cuisines:[{type: String}],
	average_costfortwo:String,
	currency:String,
	has_tablebooking:String,
	has_online_delivery:String,
	aggregate_rating:{type: Number, default: 0},
	rating_color:String,
	rating_text:String,
	votes:{type: Number, default: 0}
	
});

schema.index({restaurant_name: 'text'});


export default mongoose.model("Restaurants",schema);
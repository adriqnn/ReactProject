const {Schema, model, Types} = require('mongoose');

const restaurantSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: [3, 'The name must be at least 3 characters long!']
    },
    address:{
        type: String,
        required: true,
        minlength: [3, 'The address must be at least 3 characters long!']
    },
    description:{
        type: String,
        required: true,
        minlength: [3, 'The description must be at least 3 characters long!']
    },
    picture:{
        type: String,
        required: true,
        minlength: [3, 'The picture url must be at least 3 characters long!']
    },
    rating:{
        type: Number,
        required: true,
        default: 0,
        min: [0, 'Rating cannot be negative!']
    },
    owner:{
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    // comments:{
    //     type: [Types.ObjectId],
    //     default: [],
    //     ref: 'Comment',
    //     required: true
    // }
},{ timestamps: { createdAt: 'created_at'}});

const Restaurant = model('Restaurant', restaurantSchema);
module.exports = Restaurant;
const mongoose = require ('mongoose');
const {Schema, model} =mongoose;

const celebritySchema = new Schema ({
name : String,
occupation: String,
catchPhrase: String,
movie:{
    type: Schema.Types.ObjectId,
    ref: 'Movie'
},
});

module.exports = model('Celebrity', celebritySchema);


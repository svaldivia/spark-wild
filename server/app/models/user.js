var mongoose = require( 'mongoose' ),
	Schema = mongoose.Schema,
	UserSchema,
	User;

UserSchema = new Schema( {
	facebook_id: { type: Number, required: true, index: true, unique: true },
	email: {type: String, index: true, unique: true, required: true},
	name: { type: String, required: true },
	latest_location: { type: { type: String }, coordinates: [Number] },
} );

UserSchema.index( { latest_location: '2dsphere' } );

User = mongoose.model( 'User', UserSchema );

module.exports = User;
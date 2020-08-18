import mongoose, { Schema } from 'mongoose';

const categorySchema = new mongoose.Schema({
    name:{ type: String, required: true },
    description: { type: String, required: false}
});


const categoryModel = mongoose.model('Caterory', categorySchema);


export default categoryModel ;
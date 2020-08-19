import mongoose, { Schema } from 'mongoose';

const categorySchema = new mongoose.Schema({
    name:{ type: String, required: true },
    description: { type: String, required: false}
});


const categoryModel = mongoose.model('Category', categorySchema);


export default categoryModel ;
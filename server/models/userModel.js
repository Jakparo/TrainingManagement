import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email: { type: String, required: true, unique: true, index: true, dropDups: true },
    password: { type: String, required: false },
    type: { type: String, required:false},
    phone: { type: String, required:false},
    toeic: { type: Number, required: false },
    department: { type: String, required: false},
    address: { type: String, required: false },
    isAdmin: { type: Boolean, required: false, default: false},
    isTraining: { type: Boolean, required: false, default: false},
    isTrainer:{ type: Boolean, required: false, default: false},
    // course: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
});


const userModel = mongoose.model('User', userSchema);


export default userModel ;
import mongoose from 'mongoose';


const courseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    trainer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    trainees:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    category:{type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    description: {type: String}
})

const courseModel = mongoose.model('Course', courseSchema);

export default courseModel;
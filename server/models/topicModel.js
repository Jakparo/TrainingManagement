import mongoose from 'mongoose';


const topicSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String}
})

const topicModel = mongoose.model('Topic', topicSchema);

export default topicModel;
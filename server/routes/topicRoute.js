import express from 'express';
import Topic from '../models/topicModel';
import { isAuth, isTraining } from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
    const name = req.query.name ? {name: req.query.name} : {};
    const searchKeyword = req.query.searchKeyword ? {
        name: {
            $regex: req.query.searchKeyword,
            $options: 'i'
        }
    } : {};
    const topics = await Topic.find({...name,...searchKeyword});
    res.send(topics);
});

router.post('/', isAuth, isTraining, async(req, res) => {
    const topic = new Topic({
        name: req.body.name,
        description: req.body.description
    });
    const newTopic = await topic.save();
    if (newTopic){
        return res.status(201).send({ message: 'New Topic Created', data: newTopic});
    }
    return res.status(500).send({ message: ' Error in Creating Topic.' });
})

router.put("/:id", isAuth, isTraining, async (req, res) => {
    const topicId = req.params.id;
    const topic = await Topic.findById(topicId);
    if (topic) {
        topic.name = req.body.name;
        topic.description = req.body.description;
        
        const updatedTopic = await topic.save();
    if (updatedTopic) {
        return res.status(200).send({ message: 'Topic Updated', data: updatedTopic});
    }
}})

router.delete("/:id", isAuth, isTraining, async (req, res) => {
    const deletedTopic = await Topic.findById(req.params.id);
    if (deletedTopic) {
        await deletedTopic.remove();
        res.send({ message: "Topic Deleted" });
    } else {
        res.send("Error in Deletion.");
    }
});

router.get('/:id', async (req, res) => {
    const topic = await Topic.findOne({ _id: req.params.id });
    if (topic) {
        res.send(topic);
    } else {
        console.log('Something wrong');
        res.status(404).send({ message: 'topic Not Found.' });
    }
});

export default router; 
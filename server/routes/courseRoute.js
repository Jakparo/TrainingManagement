import express from 'express';
import Course from '../models/courseModel';
import { isAuth, isTraining } from '../util';

const router = express.Router();

router.get("/mine", isAuth, async(req,res)=>{
    const courses = await Course.find({trainer: req.user._id});
    res.send(courses);
})

router.get("/category/:id", async(req, res)=>{
    const courses = await Course.find( {category: req.params.id} );
    if (courses) {
    res.send(courses)
    } else {
    console.log('Can’t find course by category')
    res.status(999).send({message: "Course not found"})
    }
})

router.get("/", async (req, res) => {
    const name = req.query.name ? {name: req.query.name} : {};
    const searchKeyword = req.query.searchKeyword ? {
        name: {
            $regex: req.query.searchKeyword,
            $options: 'i'
        }
    } : {};
    const courses = await Course.find({...name,...searchKeyword});
    res.send(courses);
});

router.post('/', isAuth, isTraining, async(req, res) => {
    const course = new Course({
        name: req.body.name,
        trainer: req.body.trainer,
        trainees: req.body.trainees,
        topic: req.body.topic,
        category: req.body.category,
        description: req.body.description
    });
    const newCourse = await course.save();
    if (newCourse){
        return res.status(201).send({ message: 'New Course Created', data: newCourse});
    }
    return res.status(500).send({ message: ' Error in Creating Course.' });
})

router.put("/:id", isAuth, isTraining, async (req, res) => {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    if (course) {
        course.name = req.body.name;
        course.trainer = req.body.trainer;
        course.trainees = req.body.trainees;
        course.category = req.body.category;
        course.description = req.body.description;
        
        const updatedCourse = await course.save();
    if (updatedCourse) {
        return res.status(200).send({ message: 'Course Updated', data: updatedCourse});
    }
}})

router.delete("/:id", isAuth, isTraining, async (req, res) => {
    const deletedCourse = await Course.findById(req.params.id);
    if (deletedCourse) {
        await deletedCourse.remove();
        res.send({ message: "Course Deleted" });
    } else {
        res.send("Error in Deletion.");
    }
});

router.get('/:id', async (req, res) => {
    const course = await Course.findOne({ _id: req.params.id });
    if (course) {
        res.send(course);
    } else {
        console.log('Something wrong');
        res.status(404).send({ message: 'Course Not Found.' });
    }
});

export default router; 
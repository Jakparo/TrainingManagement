import express from 'express';
import Category from '../models/categoryModel';
import { getToken, isAuth} from '../util';

const router = express.Router();


router.get("/", async (req, res) => {
    const name = req.query.name ? {name: req.query.name} : {};
    const searchKeyword = req.query.searchKeyword ? {
        name: {
            $regex: req.query.searchKeyword,
            $options: 'i'
        }
    } : {};
    const categories = await Category.find({...name,...searchKeyword});
    res.send(categories);
});

router.post("/", isAuth, async (req, res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description,
    });

    const newCategory = await category.save();
    if (newCategory) {
        return res.status(201).send({ message: 'New Category Created', data: newCategory });
    }
        return res.status(500).send({ message: ' Error in Creating Category.' });
})

router.put("/:id", isAuth, async (req, res) => {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (category) {
        category.name = req.body.name;
        category.description = req.body.description;
        
        const updatedCategory = await category.save();
    if (updatedCategory) {
        return res.status(200).send({ message: 'Category Updated', data: updatedCategory, token: getToken(updatedCategory)});
    }
}})

router.delete("/:id", isAuth, async (req, res) => {
    const deletedCategory = await Category.findById(req.params.id);
    if (deletedCategory) {
        await deletedCategory.remove();
        res.send({ message: "Category Deleted" });
    } else {
        res.send("Error in Deletion.");
    }
});


router.get('/:id', async (req, res) => {
    const category = await Category.findOne({ _id: req.params.id });
    if (category) {
        res.send(category);
    } else {
        console.log('Something wrong');
        res.status(404).send({ message: 'Category Not Found.' });
    }
});

export default router;
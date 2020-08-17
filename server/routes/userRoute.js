import express from 'express';
import User from '../models/userModel';
import { getToken, isAuth, isAdmin } from '../util';

const router = express.Router();

// trainer
router.get("/trainer", async (req, res) => {
    const name = req.query.name ? {name: req.query.name} : {};
    const searchKeyword = req.query.searchKeyword ? {
        name: {
            $regex: req.query.searchKeyword,
            $options: 'i'
        }
    } : {};
    const trainers = await User.find({...name,...searchKeyword,isTrainer:'true'});
    res.send(trainers);
});

router.post("/trainer", isAuth, isAdmin, async (req, res) => {
    const trainer = new User({
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        phone: req.body.phone,
        password: req.body.password,
        isTrainer: true
    });

    const newTrainer = await trainer.save();
    if (newTrainer) {
        return res.status(201).send({ message: 'New Trainer Created', data: newTrainer });
    }
        return res.status(500).send({ message: ' Error in Creating Trainer.' });
})

router.put("/trainer/:id", isAuth, isAdmin, async (req, res) => {
    const trainerId = req.params.id;
    const trainer = await User.findById(trainerId);
    if (trainer) {
        trainer.name = req.body.name;
        trainer.email = req.body.email;
        trainer.type = req.body.type;
        trainer.phone = req.body.phone;
        trainer.password = req.body.password;
        
        const updatedTrainer = await trainer.save();
    if (updatedTrainer) {
        return res.status(200).send({ message: 'Trainer Updated', data: updatedTrainer, token: getToken(updatedTrainer)});
    }
}})

router.delete("/trainer/:id", isAuth, isAdmin, async (req, res) => {
    const deletedTrainer = await User.findById(req.params.id);
    if (deletedTrainer) {
        await deletedTrainer.remove();
        res.send({ message: "Trainer Deleted" });
    } else {
        res.send("Error in Deletion.");
    }
});


router.get('/trainer/:id', async (req, res) => {
    const trainer = await User.findOne({ _id: req.params.id });
    if (trainer) {
        res.send(trainer);
    } else {
        console.log('Something wrong');
        res.status(404).send({ message: 'Trainer Not Found.' });
    }
});

//Staff
router.get("/staff", async (req, res) => {
    const name = req.query.name ? {name: req.query.name} : {};
    const searchKeyword = req.query.searchKeyword ? {
        name: {
            $regex: req.query.searchKeyword,
            $options: 'i'
        }
    } : {};
    const staffs = await User.find({...name,...searchKeyword,isTraining:'true'});
    res.send(staffs);
});

router.post("/staff", isAuth, isAdmin, async (req, res) => {
    const staff = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isTraining: true
    });

    const newStaff = await staff.save();
    if (newStaff) {
        return res.status(201).send({ message: 'New Staff Created', data: newStaff });
    }
        return res.status(500).send({ message: ' Error in Creating Staff.' });
})

router.put("/staff/:id", isAuth, isAdmin, async (req, res) => {
    const staffId = req.params.id;
    const staff = await User.findById(staffId);
    if (staff) {
        staff.name = req.body.name;
        staff.email = req.body.email;
        staff.password = req.body.password;
        
        const updatedStaff = await staff.save();
    if (updatedStaff) {
        return res.status(200).send({ message: 'Staff Updated', data: updatedStaff, token: getToken(updatedStaff)});
    }
}})

router.delete("/staff/:id", isAuth, isAdmin, async (req, res) => {
    const deletedStaff = await User.findById(req.params.id);
    if (deletedStaff) {
        await deletedStaff.remove();
        res.send({ message: "Staff Deleted" });
    } else {
        res.send("Error in Deletion.");
    }
});


router.get('/staff/:id', async (req, res) => {
    const staff = await User.findOne({ _id: req.params.id });
    if (staff) {
        res.send(staff);
    } else {
        console.log('Something wrong');
        res.status(404).send({ message: 'Staff Not Found.' });
    }
});

// All user
router.post('/signin', async(req,res)=>{
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if( signinUser){
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            isTrainer: signinUser.isTrainer,
            isTraining: signinUser.isTraining,
            token: getToken(signinUser)
        })
    } else {
        res.status(401).send({msg:'Invalid Email or Password!'});
    }
});


router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({ 
            name:'Admin',
            email:'admin@gmail.com',
            password:'12345',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);    
    } catch (error) {
        res.send({ msg: error.message });    
    }
});

router.get("/createtrainer", async (req, res) => {
    try {
        const user = new User({ 
            name:'Trainer2',
            email:'trainer2@gmail.com',
            password:'12345',
            isTrainer: true
        });
        const newUser = await user.save();
        res.send(newUser);    
    } catch (error) {
        res.send({ msg: error.message });    
    }
});

router.get("/createstaff", async (req, res) => {
    try {
        const user = new User({ 
            name:'Staff1',
            email:'staff1@gmail.com',
            password:'12345',
            isTraining: true
        });
        const newUser = await user.save();
        res.send(newUser);    
    } catch (error) {
        res.send({ msg: error.message });    
    }
});
export default router;
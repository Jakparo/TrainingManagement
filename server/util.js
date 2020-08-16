import jwt from 'jsonwebtoken';
import config from './config';

const getToken = (user) =>{
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isTraining: user.isTraining,
        isTrainer: user.isTrainer
    }, config.JWT_SECRET,{
        expiresIn: '48h'
    });
}

// middleware 
const isAuth = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
    if (err) {
        return res.status(401).send({ msg: 'Invalid Token' });
    }
    req.user = decode;
    next();
    return
    });
    } else {
        return res.status(401).send({ msg: "Token is not supplied." });
    }
}

const isAdmin = (req, res, next) => {
    console.log(req.user)
    if (req.user && req.user.isAdmin) {
        return next();
    }
    return res.status(401).send({ msg: 'Admin Token is not valid.' })
}  

const isTraining = (req, res, next) => {
    console.log(req.user)
    if (req.user && req.user.isTraining) {
        return next();
    }
    return res.status(401).send({ msg: 'Training Token is not valid.' })
}  

const isTrainer =  (req, res, next) => {
    console.log(req.user)
    if (req.user && req.user.isTraier) {
        return next();
    }
    return res.status(401).send({ msg: 'Training Token is not valid.' })
}  

export{getToken, isAuth, isAdmin, isTrainer, isTraining}
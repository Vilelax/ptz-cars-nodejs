const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/user');
const ExpiredToken = require('../models/expired-token');

exports.register = async (req, res, next) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
        name: name,
        email: email,
        password: hashedPassword
    });

    res.sendStatus(201);
}

exports.login = async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findAll({
        where: {
            email: email
        },
        raw: true
    });

    if(Object.keys(user).length === 0){
        res.sendStatus(500);
        return;
    };

    const storedPassword = user['0'].password;

    const match = await bcrypt.compare(password, storedPassword);

    if(match){
        const token = await jwt.sign({userId: user.id}, process.env.SECRET, {expiresIn: 300});
        return res.json({auth: true, token});
    }

    res.sendStatus(200);
}

//Finish this middleware adding a table of unvalid tokens
exports.logout = async (req, res, next) => {
    const token = req.headers['x-access-token'];

    await ExpiredToken.create({
        token: token
    });

    res.send(200);
}


exports.verifyJWT = async (req, res, next) => {
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if(err){
            return res.sendStatus(401);
        }

        if(await isTokenExpired(token)){
            return res.sendStatus(401);
        }
    
        req.userId = decoded.userId;
        next();
        
    });

    
}

const isTokenExpired = async token => {

    const expired = await ExpiredToken.findAll({
        where:{
            token: token
        },
        raw: true
    });

    if(Object.keys(expired).length != 0 ){
        return true;
    }

    return false;
};

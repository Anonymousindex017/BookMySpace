const express = require('express');
const router = express.Router();
const Model = require('../models/usermodel');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const verifyToken = require('./verifytoken');

router.post('/add', (req, res) => {
    console.log(req.body);

    // to save data in mongodb
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

router.get('/getall', (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbyid', verifyToken, (req, res) => {

    Model.findById(req.user._id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// : denotes url parameter
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})
//test
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/authenticate', (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { _id, firstName, lastName, avatar, role, email } = result;
                const payload = { _id, email, role, avatar, firstName, lastName };
                //create njwt to 
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '300 days'},
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json(err);
                        } else {
                            res.status(200).json({ token, avatar, role, firstName, lastName });
                        }
                    }
                )
            } else {
                res.status(401).json({ message: 'invaild credentials' });
            }
        }).catch((err) => {
            console.log(err);

        });
})

module.exports = router;
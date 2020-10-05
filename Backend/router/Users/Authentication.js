const mongoose = require('mongoose');
const userRegistration = mongoose.model('user_registeration');
const sellerRegistration = mongoose.model('seller_registeration');
const express = require("express");
const router = express.Router();

router.get(`/userregistration`, async(req, res) => {
    let userRegistration = await Product.find();
    return res.status(200).send(products);
});

router.post(`/userregistration`, async(req, res) => {
    let isEmailExists = await userRegistration.findOne({ email: req.body.email });
    if (isEmailExists) {
        return res.status(200).send({
            error: true,
            message: 'email is exists',
        })
    }
    let product = await userRegistration.create(req.body);
    return res.status(200).send({
        error: false,
        message: 'success',
        product
    })

})
router.post('/emailValidation', async(req,res)=>{
    console.log(req.body.email)
    let isEmailExists = await userRegistration.findOne({ email: req.body.email });
    console.log(isEmailExists)
    return res.status(200).send({
        error: isEmailExists ? true : false,
        message: isEmailExists ? 'email is exists': '',
    })
})
router.put(`/api/product/:id`, async(req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
        error: false,
        product
    })

});

router.delete(`/api/product/:id`, async(req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
        error: false,
        product
    })

})


router.post('/userLogin', async(req, res) => {
    console.log(req.body, 'node')
    let products = await userRegistration.find(req.body);
    if (products.length) {
        return res.status(200).send({
            error: false,
            products
        })
    } else {
        return res.status(200).send({
            error: true,
            message: 'not exists',
            products
        })
    }


})

router.post('/sellerLogin', async(req, res) => {
    console.log(req.body, 'node')
    let products = await sellerRegistration.find(req.body);
    if (products.length) {
        return res.status(200).send({
            error: false,
            products
        })
    } else {
        return res.status(200).send({
            error: true,
            message: 'not exists',
            products
        })
    }


})
router.post('/selleremailValidation', async(req, res) => {
    console.log(req.body, 'node')
    let isEmailExists = await sellerRegistration.find(req.body);
    console.log(isEmailExists)
    return res.status(200).send({
        error: isEmailExists ? true : false,
        message: isEmailExists ? 'email is exists': '',
    })


})

module.exports = router

// module.exports = (app) => {

//     app.get(`/api/product`, async(req, res) => {
//         let products = await Product.find();
//         return res.status(200).send(products);
//     });

//     app.post('/auth/login', async(req, res) => {
//         console.log(req.body, 'node')
//         let products = await Product.find(req.body);
//         if (products.length) {
//             return res.status(200).send({
//                 error: false,
//                 products
//             })
//         } else {
//             return res.status(200).send({
//                 error: true,
//                 message: 'not exists',
//                 products
//             })
//         }

//     })


//     app.put(`/api/product/:id`, async(req, res) => {
//         const { id } = req.params;

//         let product = await Product.findByIdAndUpdate(id, req.body);

//         return res.status(202).send({
//             error: false,
//             product
//         })

//     });

//     app.delete(`/api/product/:id`, async(req, res) => {
//         const { id } = req.params;

//         let product = await Product.findByIdAndDelete(id);

//         return res.status(202).send({
//             error: false,
//             product
//         })

//     })

// }
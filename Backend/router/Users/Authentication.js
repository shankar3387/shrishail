const mongoose = require('mongoose');
const userRegistration = mongoose.model('user_registeration');
const sellerRegistration = mongoose.model('seller_registeration');
const express = require("express");
const router = express.Router();

router.get(`/userregistration`, async(req, res) => {
    let conditions = {
        login_type: { $ne: 'admin' }
    }
    let user = await userRegistration.find(conditions)
    return res.status(200).send(user);
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
router.post(`/sellerRegistration`, async(req, res) => {
    let isEmailExists = await sellerRegistration.findOne({ email: req.body.email });
    if (isEmailExists) {
        return res.status(200).send({
            error: true,
            message: 'email is exists',
        })
    }
    let registration = await sellerRegistration.create(req.body);
    return res.status(200).send({
        error: false,
        message: 'success',
        registration
    })

})
router.get(`/sellerRegistration`, async(req, res) => {
    // let conditions = {
    //     login_type: { $ne: 'admin' }
    // }
    let seller = await sellerRegistration.find()
    return res.status(200).send(seller);
});
router.post('/emailValidation', async(req,res)=>{
    let isEmailExists = await userRegistration.findOne({ email: req.body.email });
    return res.status(200).send({
        error: isEmailExists ? true : false,
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
    let userDetails = await userRegistration.find(req.body);
    console.log(userDetails)
    res.status(200).send({
        userDetails:userDetails[0]
    })


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
    let isEmailExists = await sellerRegistration.find(req.body);
    console.log(isEmailExists.length)
    return res.status(200).send({
        error: isEmailExists.length ? true : false,
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
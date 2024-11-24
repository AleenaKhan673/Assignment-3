var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
// telling my router that I have this model
let Cart = require('../model/cart.js');
const cart = require('../model/cart.js');
let cartController = require('../controllers/cart.js')

/* Get route for the cart list - Read Operation */
/*
GET,
Post,
Put --> Edit/Update
*/
/* Read Operation --> Get route for displaying the carts list */
router.get('/',async(req,res,next)=>{
try{
    const cartlist = await cart.find();
    res.render('cart/list',{
        title:'carts',
        cartlist:cartlist
    })}
    catch(err){
        console.error(err);
        res.render('cart/list',{
            error:'Error on the server'
        })
    }
    });
/* Create Operation --> Get route for displaying me the Add Page */
router.get('/add',async(req,res,next)=>{
    try{
        res.render('cart/add',{
            title: 'Add to cart'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('cart/list',{
            error:'Error on the server'
        })
    }
});
/* Create Operation --> Post route for processing the Add Page */
router.post('/add',async(req,res,next)=>{
    try{
        let newcart = cart({
            "Name":req.body.Name,
            "Brand":req.body.Brand,
            "ItemType":req.body.ItemType,
            "Description":req.body.Description,
            "Price":req.body.Price,
            "Address":req.body.Address
        });
        cart.create(newcart).then(()=>{
            res.redirect('/cartlist');
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('cart/list',{
            error:'Error on the server'
        })
    }
});
/* Update Operation --> Get route for displaying me the Edit Page */
router.get('/edit/:id',async(req,res,next)=>{
    try{
        const id = req.params.id;
        const cartToEdit= await cart.findById(id);
        res.render('cart/edit',
            {
                title:'Edit cart',
                cart:cartToEdit
            }
        )
    }
    catch(err)
    {
        console.error(err);
        next(err); // passing the error
    }
});
/* Update Operation --> Post route for processing the Edit Page */ 
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        let updatedcart = ({
            "_id":id,
            "Name":req.body.Name,
            "Brand":req.body.Brand,
            "ItemType":req.body.ItemType,
            "Description":req.body.Description,
            "Price":req.body.Price,
            "Address":req.body.Address
        });
        cart.findByIdAndUpdate(id,updatedcart).then(()=>{
            res.redirect('/cartlist')
        })
    }
    catch(err){
        console.error(err);
        res.render('cart/list',{
            error:'Error on the server'
        })
    }
});
/* Delete Operation --> Get route to perform Delete Operation */
router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        cart.deleteOne({_id:id}).then(()=>{
            res.redirect('/')
        })
    }
    catch(error){
        console.error(error);
        res.render('cart/list',{
            error:'Error on the server'
        })
    }
});
module.exports = router;
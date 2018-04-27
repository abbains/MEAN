const express= require('express');
const router = express.Router();
const product = require('../modals/products');


//show products
router.get('/showproducts',function(req, res) {
    product.find(function( err, product ){
        if(err){
            console.log(err);
        }else{
            res.json(product)
    }
 });
});

//adding products
router.post('/addproduct',function(req,res) {
    // console.log(req.body);

    const products = new product({
        productname : req.body.productname,
        productdescription : req.body.productdescription

    });
    // console.log(newProduct);
   products.save(function(err)  {
         if (err){
              res.json({msg : 'err'})
             // console.log('err')
         }else{
             // console.log('accepted')
             res.json({msg:'accepted'})
         }
 });
});

//deleting products
router.delete('/deleteproduct/:id', function(req, res)  {
    //console.log(req.params.id);
    product.remove({_id:req.params.id},function(err) {
        if(err){
                console.log(err)
            }else{
                res.json({msg: 'deleted'});
        }
    });
});

//updating products



router.post('/updateproducts/:id',function (req,res) {
    var productrec = {
        productname : req.body.productname,         //use put or patch(important)
        productdescription : req.body.productdescription
    };
    product.update({_id:req.params.id},productrec,function(err){
        if (err){
            console.log(err);
        }else{
            res.json({msg:'accepted'})
        }
    })
})

module.exports = router;
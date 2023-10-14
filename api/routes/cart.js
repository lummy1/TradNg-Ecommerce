const {
    verifyToken,
    verifyTokenAndAuthorize,
    verifyTokenAndAdmin,
  } = require('./verifyToken');
  const Cart = require('../models/Cart');
  const { status } = require('express/lib/response');
  
  const router = require('express').Router();
  
 
  
  //GET USER STATS
  //   router.get('/stats', verifyTokenAndAdmin, async (req, res)=>{
  
  //       const date = new Date();
  //       const lastYear = new Date(date.getFullYear(date.getFullYear()- 1));
  
  //       try {
  //           const pipeline= [
  //               { $match : { createdAt: {$gte: lastYear} } },
  //               {
  //                   $project: {
  //                       month: { $month: "$createdAt" },
  
  //                   },
  
  //               },
  //               {
  //                   $group: {
  //                       _id: "$month",
  //                       total: {$sum: 1},
  //                   }
  //               }
  
  //           ];
  //             const data= await User.aggregate(pipeline);
  //          console.log(data);
  //           res.status(200).json(data);
  //       } catch (error) {
  //          res.status(500).json(error);
  //       }
  
  //   });
  

   //CREATE CART
  
   router.post('/', verifyToken, async (req, res) => {
    try {
      const newCart = new Cart(req.body);
  
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
      console.log(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //GET USER CART BY UserID
  router.get('/:userid', verifyTokenAndAuthorize, async (req, res) => {
    try {
      const cart = await Cart.findone({userId: req.params.userid});
  
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
 //GET ALL Cart for All users by Admin
    router.get("/", verifyTokenAndAdmin, async (req, res)=>{

        const cart = await Cart.find();

        try{

            res.status(200).json(cart);
        }catch(err){
            res.status(500).json(err)
        }
    })




  //UPDATE
  router.put('/:id', verifyTokenAndAuthorize, async (req, res) => {
    try {
      console.log(req.body);
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
  
      // console.log("updatedUser"+updatedUser);
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete('/:id', verifyTokenAndAuthorize, async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
  
      res.status(200).json('Cart deleted Successfully');
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  
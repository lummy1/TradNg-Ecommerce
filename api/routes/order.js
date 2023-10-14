const {
    verifyToken,
    verifyTokenAndAuthorize,
    verifyTokenAndAdmin,
  } = require('./verifyToken');
  const Order = require('../models/Orders');
  const { status } = require('express/lib/response');
  
  const router = require('express').Router();

  
  //GET MONTHLY INCOME

  router.get("/income", verifyTokenAndAdmin, async (req, res)=>{

    const date =new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try{


        const pipeline = [
          { $match: { createdAt: { $gte: previousMonth } } },
          {
            $project: {
              month: { $month: "$createdAt" },
              sales: "$amount",
            },
          },
          {
            $group: {
              _id: "$month",
              total: { $sum: "$sales" },
            },
          },
        ];
            
       const income= await Order.aggregate(pipeline);
       console.log('yy'+income);
        res.status(200).json(income);
    }catch(err){
        res.status(500).json(err)
    }
    
  })



  //CREATE 
  
  router.post('/', verifyToken, async (req, res) => {
    try {
      const newOrder = new Order(req.body);
  
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
      console.log(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
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
  
  //GET USER ORDERS BY UserID
  router.get('/:userid', verifyTokenAndAuthorize, async (req, res) => {
    try {
      const orders = await Order.find({userId: req.params.userid});
  
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
 //GET ALL Orders for All users by Admin
    router.get("/", verifyTokenAndAdmin, async (req, res)=>{

        const orders = await Order.find();

        try{

            res.status(200).json(orders);
        }catch(err){
            res.status(500).json(err)
        }
    })




  //UPDATE
  router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
      console.log(req.body);
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
  
      // console.log("updatedUser"+updatedUser);
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
  
      res.status(200).json('Order deleted Successfully');
    } catch (err) {
      res.status(500).json(err);
    }
  });


  
  
  module.exports = router;
  
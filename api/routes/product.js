const {
  verifyToken,
  verifyTokenAndAuthorize,
  verifyTokenAndAdmin,
} = require('./verifyToken');
const Product = require('../models/Product');
const { status } = require('express/lib/response');

const router = require('express').Router();

//CREATE PRODUCT

router.post('/', verifyTokenAndAuthorize, async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
    console.log(savedProduct);
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

//GET Product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Product
router.get('/', async (req, res) => {
  const qlimit = req.query.limit;
  const qCategory = req.query.category;
   console.log(qCategory, qlimit);
  try {
    //
    let products;

    if (qlimit) {
      products = await Product.find().sort({ CreatedAt: -1 }).limit(qlimit);
    } else if (qCategory) {
      products = await Product.find({ 
            categories: { 
                $in: [qCategory],
            } 
        }).limit(qlimit);
    }else{ products = await Product.find(); }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});




//UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    console.log(req.body);
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    // console.log("updatedUser"+updatedUser);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json('Product deleted Successfully');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

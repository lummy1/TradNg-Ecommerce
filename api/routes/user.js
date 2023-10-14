const {
  verifyToken,
  verifyTokenAndAuthorize,
  verifyTokenAndAdmin,
} = require('./verifyToken');
const User = require('../models/Users');
const { status } = require('express/lib/response');

const router = require('express').Router();
//GET USER STATS
router.get('/stats', verifyTokenAndAdmin, async (req, res)=>{

    const date = new Date();
    const lastYear = new Date(date.getFullYear(date.getFullYear()- 1));

    try {
        const pipeline= [
            { $match : { createdAt: {$gte: lastYear} } },
            {
                $project: {
                    month: { $month: "$createdAt" },

                },

            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1},
                }
            }
        
        
        ];
          const data= await User.aggregate(pipeline);
       //console.log(data);
        res.status(200).json(data);
    } catch (error) {
       res.status(500).json(error); 
    }

});

//GET USER by ID
router.get('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  const limit = req.query.limit;
  console.log(query, limit)
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(limit)
      : await User.find();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put('/:id', verifyTokenAndAuthorize, async (req, res) => {
  console.log(req.body);
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTJS_SECRET_KEY
    ).toString();
  }

  try {
    console.log(req.body);
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    // console.log("updatedUser"+updatedUser);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete('/:id', verifyTokenAndAuthorize, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json('User deleted Successfully');
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;

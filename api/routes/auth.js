const router= require("express").Router();
const User = require("../models/Users");
const CryptoJS= require ("crypto-js");
const jwt = require("jsonwebtoken")


//REGISTER
router.post("/register", async (req,res)=>{

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, (process.env.CRYPTJS_SECRET_KEY)).toString(),
            
        })




        try{
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
        
        }catch(err){

            res.status(500).json(err); 
            console.log(err)
        }

})



//LOGIN

router.post("/login", async (req,res) =>{

    try{

        const user = await User.findOne({username: req.body.username});

        !user && res.status(401).json("Wrong Credentials")

        const hashed_password = CryptoJS.AES.decrypt(user.password, process.env.CRYPTJS_SECRET_KEY);
       
        const  db_password= hashed_password.toString(CryptoJS.enc.Utf8);

        db_password !== req.body.password && res.status(401).json("Wrong Credetials2");
        
       const accessToken = jwt.sign({
        id:user._id, 
        isAdmin: user.isAdmin,
       },
       process.env.JWT_SEC_KEY,
       {expiresIn: "3d"}
       
       )
        const {password, ...others} = user._doc;


        res.status(200).json({...others, accessToken})
    }catch(err){
        res.status(500).json(err);
    }
    const loginUser = new User({

        username: req.body.username,
        password: req.body.password
    })

})

module.exports = router
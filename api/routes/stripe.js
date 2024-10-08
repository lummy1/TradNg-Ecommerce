const router= require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const stripe=Stripe;


router.post("/payment", (req, res) =>{

    console.log(req.body.tokenId)
    console.log(req.body.amount)
    stripe.charges.create(
        {

        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes)=>{

        if(stripeErr){
            console.log(stripeErr);
            res.status(500).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }
    }
    )


})



module.exports = router;
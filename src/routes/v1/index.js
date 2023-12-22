const express=require('express');

const {create,get,destroy,signIn}=require('../../controllers/user-controller')

const router=express.Router();

router.post('/signup',create);
router.get('/user/:id',get);
router.delete('/user/:id',destroy);
router.post('/signin',signIn);


module.exports=router;
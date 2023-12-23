const express=require('express');

const {create,get,destroy,signIn, isAuthenticated}=require('../../controllers/user-controller')
const {AuthValidators}=require('../../middlewares/index');
const router=express.Router();

router.post('/signup',AuthValidators,create);
router.get('/user/:id',get);
router.delete('/user/:id',destroy);
router.post('/signin',AuthValidators,signIn);
router.post('/isAuthenticated',isAuthenticated)

module.exports=router;
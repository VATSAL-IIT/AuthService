const express=require('express');

const {create,get,destroy,signIn,isAdmin, isAuthenticated}=require('../../controllers/user-controller')
const {authValidators}=require('../../middlewares/index');
const router=express.Router();

router.post('/signup',create);
router.get('/user/:id',get);
router.delete('/user/:id',destroy);
router.post('/signin',signIn);
router.post('/isAuthenticated',isAuthenticated);
router.get('/isAdmin',isAdmin);

module.exports=router;
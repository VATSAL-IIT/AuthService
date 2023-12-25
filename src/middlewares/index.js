const authValidators={
    validateUserAuth : require('../middlewares/auth-request-validators'),
    validateIsAdminRequest : require('../middlewares/auth-request-validators')
}
module.exports=authValidators;

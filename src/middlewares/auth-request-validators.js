
const validateUserAuth=(req,res,next)=>{
    if(!req.body.email || !req.body.password)
    {
        return res.status(500).json({
            success:false,
            data:{},
            message:'Email or password is missing.'
        })
    }
    next();
}

const validateIsAdminRequest=(req,res,next)=>{
    if(!req.params.id)
    {
        return res.status(500).json({
            success:false,
            data:{},
            message:'Id missing.'
        })
    }
    next();
}

module.exports={validateUserAuth,validateIsAdminRequest};


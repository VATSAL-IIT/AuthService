const UserService=require('../services/user-service');

const create=async(req,res)=>{
    try{
        const user=await UserService.create({
            email:req.body.email,
            password:req.body.password
        })
        return res.status(201).json({
            data:user,
            success:true,
            message:"Successfully created the user.",
            error:{}
        });
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Something went wrong.",
            error:error
        })
    }
}
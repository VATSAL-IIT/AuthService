const UserService=require('../services/user-service');

const userService=new UserService();

const create=async(req,res)=>{
    try{
        const user=await userService.create({
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

const get=async (req,res)=>{
    try{
        const user=await userService.get(req.params.id)
        return res.status(201).json({
            data:user,
            success:true,
            message:"Successfully retreived the user.",
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

const destroy=async(req,res)=>{
    try{
        const user=await userService.create({
            email:req.body.email,
            password:req.body.password
        })
        return res.status(200).json({
            data:user,
            success:true,
            message:"Successfully deleted the user.",
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

const signIn=async(req,res)=>{
    try{
        const response=await userService.signIn(req.body.email,req.body.password);
        console.log(response);
        return response;
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

module.exports={create,get,destroy,signIn};
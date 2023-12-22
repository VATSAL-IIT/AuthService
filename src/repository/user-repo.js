const {User}= require('../models/index');

class UserRepo{
    async create(data){
        try{
            const user=await User.create(data);
            return user;
        }
        catch(error){
            console.log("Something went wrong in the repo layer " + error);
        }
    }

    async delete(userId){
        try{
            const user=await User.destroy({
                where:{
                    id:userId
                }
            });
            return user;
        }
        catch(error){
            console.log("Something went wrong in the repo layer " + error);
        }
    }

    async getById(userId){
        try{
            const user=await User.findByPk(userId,{
                attributes:['email','id','password']
            });
            return user;
        }
        catch(error){
            console.log("Something went wrong in the repo layer " + error);
        }
    }
}

module.exports=UserRepo;
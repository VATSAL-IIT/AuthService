const UserRepo = require('../repository/user-repo');

class UserService{
    constructor(){
        this.userRepo=new UserRepo();
    }

    async create(data){
        try{
            const user=await this.userRepo.create(data);
            return user;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async delete(userId){
        try{
            const user=await this.userRepo.delete(userId);
            return user;
        }
        catch(error){
            console.log("Something went wrong in the service layer " + error);
        }
    }

    async get(userId){
        try{
            const user=await this.userRepo.getById(userId);
            return user;
        }
        catch(error){
            console.log("Something went wrong in the repo layer " + error);
        }
    }
}

module.exports=UserService;
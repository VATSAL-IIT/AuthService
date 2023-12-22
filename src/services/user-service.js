const UserRepo = require('../repository/user-repo');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const JWT_KEY="authKey";

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

    createToken(user){
        try{
            const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return result;
        }
        catch(error){
            console.log(error);
        }
    }

    verifyToken(token){
        try{
            const response=jwt.verify(token,JWT_KEY);
            return response;
        }
        catch(error){
            console.log(error);
        }
    }
    
    verifyPassword(userInputPassword,encryptedPassword){
        try{
            const response=  bcrypt.compareSync(userInputPassword,encryptedPassword);
            return response; 
        }
        catch(error){
            console.log("Error in password validation "+ error);
        }
    }

    

    async signIn(email,plainPassword){
        try{
            const user= await this.userRepo.getByEmail(email);
           
            if(this.verifyPassword(plainPassword,user.password))
            {
                const newJWT = this.createToken({email:user.email,id:user.id});
                return newJWT;
            }
            else
            console.log(user.password,plainPassword,"Incorrect credentials");
        }
        catch(error){
            console.log("Something went wrong in signin process "+ error);
        }
    }
}




module.exports=UserService;
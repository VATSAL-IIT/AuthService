
class AppErrors extends Error{
    constructor(name="App error",message="Something went wrong",explanation="Something went wrong",statusCode=serverErrorCodes.INTERNAL_SERVER_ERROR){
        super();
        this.message=message;
        this.name=name;
        this.explanation=explanation; 
        this.statusCode=statusCode;
    }
}

module.exports=AppErrors;
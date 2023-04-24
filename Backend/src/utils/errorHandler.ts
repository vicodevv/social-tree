const errorHandler = (err: any)=>{
    let errors = {...err};


    if(err.code === 11000){
        errors.message = 'Duplicate field value entered';
        errors.status = 400;
    }
    if(err._message.includes('User validation failed')){
        errors.message = 'Invalid user data';
        errors.status = 400;
    }
    if(err._message.includes('Cast to ObjectId failed')){
        errors.message = 'Invalid id';
        errors.status = 400;
    }
    if(err._message.includes('Password incorrect')){
        errors.message = 'Password incorrect';
        errors.status = 400;
    }
    if(err._message.includes('User not found')){
        errors.message = 'User not found';
        errors.status = 400;
    }

return errors;
}

module.exports = errorHandler;
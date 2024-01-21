const { Schema, model, Types , mongoose} = require('mongoose');


const connect = async(req,res)=>{

    try {
        await mongoose.connect(`${process.env.URI}`).then(() =>console.log("connected to db"))
    } catch (error) {
        console.log(error);
    }

}
connect();
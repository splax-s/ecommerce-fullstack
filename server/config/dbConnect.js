const {default: mongoose} = require('mongoose')

const dbConnect = () => {
    try{
        mongoose.set("strictQuery", false);
        const conn = mongoose.connect(process.env.MONGO_URL,{
    })
    console.log("Database Connected Successfully")
    }catch(err){
        console.log("Database error: " + err)
    }
};
module.exports = dbConnect

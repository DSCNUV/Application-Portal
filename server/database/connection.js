import mongoose from 'mongoose';
import dotnev from 'dotenv';
dotnev.config();
export const conn = async () => {
    try{
        await mongoose.connect(process.env.MONGOURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }),
        console.log("Database connected!");
    }
    catch(e){
        console.log(e);
    }
}   
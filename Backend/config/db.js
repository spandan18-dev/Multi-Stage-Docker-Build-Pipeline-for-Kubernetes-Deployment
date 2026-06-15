import mongoose from 'mongoose'


const connectDB = async (url) =>{
    try {
        await mongoose.connect(url)
        console.log("DB connected ...")
        return true
    } catch (error) {
        console.error(error)
    }
}

export default connectDB
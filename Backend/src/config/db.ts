import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Ai_resume_builder')
        console.log('db connected')

    }
    catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default db
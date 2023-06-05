import mongoose from "mongoose"

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true,
            useUnifiedTopology: true,})
            .then(()=>console.log("Connected to mongoose"))
            .catch(error)
    } catch (error) {
        console.log(error.message)
    }
}

export default dbConnection
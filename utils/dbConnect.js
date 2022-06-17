import mongoose from 'mongoose'


const dbConnect = () => {
    mongoose.connect(process.env.MONGO__URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default dbConnect;
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config({ path: "./.env"})

const connectDB = async () => {
   try {
    await mongoose.connect(process.env.MONGO_URI)
   } catch (error) {
      console.log("mongodb connection error")
      process.exit(1)
   }
}

export {connectDB}
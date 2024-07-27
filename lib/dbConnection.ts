import mongoose from "mongoose";

type ConnectedObject = {
    isConnected?: number
}

const connect : ConnectedObject = {}

async function dbConnect() : Promise<void> {
    if (connect.isConnected){
        console.log("DB already connected")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})

        connect.isConnected = db.connections[0].readyState

        console.log("DB Connection Success!")
        console.log(db)
        console.log(connect.isConnected)
        
    } catch (error) {
        console.log("connection failed", error)
        process.exit(1)
    }
}

export default dbConnect;
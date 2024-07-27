import mongoose, { Schema, Document } from "mongoose"

type StatusType = {
    Todo: String
    InProgress: String
    UnderReview: String
    Complete: String
}

type PriorityType = {
    Low: String
    Medium: String
    High: String
}

export interface Tasks extends Document{
    title: string
    description: string
    status: StatusType
    priority: PriorityType
    deadline: Date
    createdAt: Date
}

export interface User extends Document{
    username: string
    userId: string
    tasks: Tasks[]
}

const tasksSchema : Schema<Tasks> = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false,
    },
    status: {
        type: String,
        enum: ['Todo', 'In-Progress', 'Under-Review', 'Complete'],
        required: [true, "Assign Status!"],
    },
    priority:{
        type: String,
        enum: ['Low', 'Medium', 'High'],
    },
    deadline:{
        type: Date
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})


const userSchema : Schema<User> = new Schema({
    userId:{
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    tasks: [tasksSchema]
})

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", userSchema)

export default UserModel;
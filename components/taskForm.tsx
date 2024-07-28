"use client"

import { useState } from "react"

import { useTask } from "@/context/taskContext"


function taskForm() {
    const [task, setTask] = useState("")
    /** status ka bhi use state bna du kya, pr this didn't worked
     * abhi apn task add kr rhe h or 2 main req h title of task or status
     * title to upr wale use state se handle ho jayega pr status ka kya kru
     * "todo", "In-Progress", "Under Review", "Completed" ye hi 4 values h status ki
     * pr jb task add kr rhe h ek general case hota h k default "todo" assign kr do, kyuki phla task h
     * pr agr koi aisa task h jo ki mujhe bs khi update krna h k ye task itna kr liya h, meaning k koi
     * already existing task nhi h pr todo bhi nhi h, maanlo mene kisi ko report di to review to wo 
     * todo me thodi na aayega wo to under review me aayega, next step ye h k status kaise assign kru me
     * task add krte me, ui k liye I have an idea pr abhi I have no idea
     */
    const [selectedStatus, setSelectedStatus] = useState("")

    const { addTask } = useTask()
    
    const add = (e : any) => {
        e.preventDefault();

        if ( !task || !selectedStatus ) return 

        addTask(task, selectedStatus)
        setTask("")
        setSelectedStatus("")
        
    }

    
}
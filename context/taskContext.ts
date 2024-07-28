import { createContext, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext({
    tasks: [
        {
            id: uuidv4(),
            title: "Task Title",
            status: "Todo" || "In-Progress" || "Under Review" || "Complete"
        }
    ],
    addTask : (title : string, status : string) => {},
    updateTask: (id: string, title: string, status?: string) => {},
    deleteTask: (id: string) => {}
})

export const TaskContextProvider = TaskContext.Provider

export const useTask = () => {
    return useContext(TaskContext)
}
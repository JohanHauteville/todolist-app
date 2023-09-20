import TaskCard from "../TaskCard"
import fullTask from '../../mock/tasksList.json'
import './styles.scss'
import { useState } from "react";

function TaskList() {
    console.log("TaskList")
    const [taskList, setTasklist] = useState(fullTask)
    console.log(taskList);



    return (
        <section className="task-container">
            {taskList.map(task => {
                return <TaskCard key={task.title} task={task} />
            })}
        </section>
    )

}

export default TaskList
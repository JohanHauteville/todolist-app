import TaskCard from "../TaskCard"
import './styles.scss'
import { useSelector } from "react-redux";



function TaskList() {
    const taskList = useSelector((state) => state.task)
    return (
        <section className="task-container">
            {taskList &&
                taskList.map(task => {
                    return <TaskCard key={task.id + "_" + task.title} task={task} />
                })}
        </section>
    )

}

export default TaskList
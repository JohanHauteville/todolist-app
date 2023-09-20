import TaskCard from "../TaskCard"
import fullTask from '../../mock/tasksList.json'
import './styles.scss'

function TaskList() {
    console.log("TaskList")
    console.log(fullTask);


    return (
        <section className="task-container">
            {fullTask.map(task => {
                return <TaskCard key={task.title} task={task} />
            })}
        </section>
    )

}

export default TaskList
import { useState } from "react";
import './styles.scss'


function TaskCard({ task }) {
    const { title, description, isFinished, tag } = task
    const [isDone, setIsDone] = useState(isFinished)

    return (
        <article className="task-card">
            <div className="task-card__check-button" onClick={() => { setIsDone(!isDone) }}>
                {isDone ?
                    <i className="fa-regular fa-circle-check"></i>
                    :
                    <i className="fa-regular fa-circle"></i>
                }
            </div>

            <div className="task-card__info">
                <h3 className={isDone ? "task-card__title task-card__title--done" : "task-card__title"}>{title}</h3>
                <p className="task-card__description">{description}</p>
                <p className="task-card__tag">{tag}</p>
            </div>
            <div className="task-card__icons">
                <i className="fa-solid fa-trash"></i>
                <i className="fa-solid fa-pen"></i>
            </div>


        </article>
    )
}

export default TaskCard;
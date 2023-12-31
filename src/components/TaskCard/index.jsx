import './styles.scss'
import * as taskActions from '../../features/tasks'
import ModalDeleteTask from '../ModalDeleteTask';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { Link } from 'react-router-dom';


function TaskCard({ task }) {
    const { title, description, isFinished, tag, id } = task
    const [isModalDeleteOpen, setModalOpen] = useState(false)
    const dispatch = useDispatch()
    const link = "/task/" + id
    const theme = useSelector(state => state.theme)

    return (
        <article className={theme === 'light' ? "task-card" : "task-card task-card--dark"}>
            {isModalDeleteOpen &&
                <ModalDeleteTask id={id} setModalOpen={setModalOpen} />}
            <div className="task-card__check-button" onClick={() => dispatch(taskActions.toggle(id))}>
                {isFinished ?
                    <i className="fa-regular fa-circle-check"></i>
                    :
                    <i className="fa-regular fa-circle"></i>
                }
            </div>

            <div className="task-card__info">
                <h3 className={isFinished ? "task-card__title task-card__title--done" : "task-card__title"}>{title}</h3>
                <p className="task-card__description">{description}</p>
                <p className="task-card__tag">{tag}</p>
            </div>
            <div className="task-card__icons">
                <i className="fa-solid fa-trash" onClick={() => setModalOpen(!isModalDeleteOpen)} ></i>
                <Link to={link}>
                    <i className="fa-solid fa-pen"></i>

                </Link>
            </div>


        </article >
    )
}

export default TaskCard;
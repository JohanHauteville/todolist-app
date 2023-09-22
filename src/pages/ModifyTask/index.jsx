import { useParams, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import * as taskActions from '../../features/tasks'

import './styles.scss'
import { useEffect } from "react"


function ModifyTask() {
    const param = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const theme = useSelector(state => state.theme)
    const task = useSelector(state => state.task).find((task) => task.id === param.id)
    let title = '';
    let description = '';
    let tag = '';
    let id = '';
    if (task) {
        title = task.title;
        description = task.description;
        tag = task.tag;
        id = task.id;
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newData = { id, ...Object.fromEntries(formData) }
        dispatch(taskActions.modifyTask(newData))
        navigate("/")
    }

    useEffect(() => {
        !task && navigate("/error")

    }, [task, navigate])

    return (
        <>
            <main className={theme === 'light' ? "task-page" : "task-page task-page--dark"}>
                <form className="task-page__form" onSubmit={handleSubmit}>
                    <h2>Modification d'une tâche</h2>

                    <label htmlFor="title">Nom de la tâche</label>
                    <input className='task-page__form-input' type="text" name='title' defaultValue={title} />

                    <label htmlFor="description">Description</label>
                    <input className='task-page__form-input' type="text" name='description' defaultValue={description} />

                    <label htmlFor="tag">Tags</label>
                    <input className='task-page__form-input' type="text" name='tag' defaultValue={tag} />

                    <input className='task-page__form-button' type="submit" />

                    <Link to="/">
                        <div className='task-page__form-button'>Annuler</div>
                    </Link>
                </form>
            </main>
            {/* )} */}
        </>
    )

}

export default ModifyTask
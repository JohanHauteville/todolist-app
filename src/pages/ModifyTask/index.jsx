import { useParams, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import * as taskActions from '../../features/tasks'

import './styles.scss'


function ModifyTask() {
    const param = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { title, description, tag, id } = useSelector(state => state.task).find((task) => task.id === param.id)

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const newData = { id, ...Object.fromEntries(formData) }

        console.log(newData);
        dispatch(taskActions.modifyTask(newData))
        navigate("/")
    }

    return (
        <main className="task-page">
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
    )

}

export default ModifyTask
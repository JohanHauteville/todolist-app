import './styles.scss'
import * as taskActions from '../../features/tasks'
import * as modalsActions from '../../features/modals'

import { useDispatch, useSelector } from 'react-redux'

function ModalAddTask() {

    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newSetTask = Object.fromEntries(formData)
        dispatch(taskActions.add(newSetTask))
        e.currentTarget.reset()
        dispatch(modalsActions.toggleAdd())

    }


    return (
        <div className={theme === 'light' ? "modal-add-task-container" : "modal-add-task-container modal-add-task-container--dark"}>
            <div className='modal-add-task-container__form-container'>
                <form className='modal-add-task-container__form' onSubmit={handleSubmit} >
                    <h3>Ajout d'une nouvelle tâche</h3>

                    <label htmlFor='title'>Nom de la tâche</label>
                    <input className='modal-add-task-container__form-input' type="text" name='title' />

                    <label htmlFor='description'>Description</label>
                    <input className='modal-add-task-container__form-input' type="text" name='description' />

                    <label htmlFor='tag'>Tag</label>
                    <input className='modal-add-task-container__form-input' type="text" name='tag' />

                    <input className='modal-add-task-container__form-button' type="submit" />
                </form>

                <button className='modal-add-task-container__form-button' onClick={() => dispatch(modalsActions.toggleAdd())}>Annuler</button>
            </div>
        </div>
    )
}

export default ModalAddTask
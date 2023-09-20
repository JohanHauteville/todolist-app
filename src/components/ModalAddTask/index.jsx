import './styles.scss'
import { useEffect, useState } from 'react'

function ModalAddTask({ setModalOpen }) {
    const [newTask, setNewTask] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newSetTask = Object.fromEntries(formData)
        setNewTask(newSetTask)
        console.log(newTask);
        console.log(newSetTask);
        e.currentTarget.reset()
        setModalOpen(false)
    }


    return (
        <div className="modal-add-task-container">
            <div className='modal-add-task-container__form-container'>
                <form className='modal-add-task-container__form' onSubmit={handleSubmit} >
                    <h3>Ajout d'une nouvelle tâche</h3>

                    <label htmlFor='name'>Nom de la tâche</label>
                    <input className='modal-add-task-container__form-input' type="text" name='name' />

                    <label htmlFor='description'>Description</label>
                    <input className='modal-add-task-container__form-input' type="text" name='description' />

                    <label htmlFor='tag'>Tag</label>
                    <input className='modal-add-task-container__form-input' type="text" name='tag' />

                    <input className='modal-add-task-container__form-button' type="submit" />
                </form>

                <button className='modal-add-task-container__form-button' onClick={() => setModalOpen(false)}>Annuler</button>
            </div>
        </div>
    )
}

export default ModalAddTask
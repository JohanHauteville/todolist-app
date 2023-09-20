import './styles.scss'
import ModalAddTask from '../ModalAddTask'
import { useState } from 'react'



function AddTaskButton() {
    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <>
            <button className='add-task-button' onClick={() => setModalOpen(true)}>
                + Tâche
            </button>
            {isModalOpen && <ModalAddTask setModalOpen={setModalOpen} />}
        </>
    )
}

export default AddTaskButton
import './styles.scss'
import * as taskActions from '../../features/tasks'
import { useDispatch } from "react-redux";

function ModalDeleteTask({ id, setModalOpen }) {
    // const { title, description, isFinished, tag, id } = task
    const dispatch = useDispatch()
    function handleDelete() {
        dispatch(taskActions.deleteTask(id))
        setModalOpen(false)
    }

    return (
        <div className="modal-delete-task-container">
            <div className='modal-delete-task-container__form-container'>
                <form className='modal-delete-task-container__form'  >
                    <h3>Êtes-vous certain de vouloir supprimer cette tâche ?</h3>
                </form>
                <button className='modal-delete-task-container__form-button' onClick={() => handleDelete()}>Supprimer</button>

                <button className='modal-delete-task-container__form-button' onClick={() => setModalOpen(false)}>Annuler</button>
            </div>
        </div>
    )
}

export default ModalDeleteTask




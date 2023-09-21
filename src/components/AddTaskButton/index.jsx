import './styles.scss'
import ModalAddTask from '../ModalAddTask'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import * as modalsActions from '../../features/modals'


function AddTaskButton() {
    const dispatch = useDispatch()
    const isModalOpened = useSelector((state) => state.modals.modalAddTask)

    return (
        <>
            <button className='add-task-button' onClick={() => dispatch(modalsActions.toggleAdd())}>
                + Tâche
            </button>
            {isModalOpened &&
                <ModalAddTask />}
        </>
    )
}

export default AddTaskButton
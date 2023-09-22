import './styles.scss';
import TaskList from '../../components/TaskList';
import AddTaskButton from '../../components/AddTaskButton';
import { useSelector } from 'react-redux';

function Home() {
  const theme = useSelector(state => state.theme)

  return (
 
      <main className={theme === 'light' ? "main-page" : "main-page main-page--dark"}>
        <AddTaskButton />
        <TaskList />
      </main>
    
  );
}

export default Home;

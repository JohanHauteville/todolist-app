import './styles.scss';
import TaskList from '../../components/TaskList';
import AddTaskButton from '../../components/AddTaskButton';

function Home() {
  return (
 
      <main className="main-page">
        <AddTaskButton />
        <TaskList />
        
      </main>
      

  );
}

export default Home;

import "./styles.scss";
import TaskList from "../../components/TaskList";
import AddTaskButton from "../../components/AddTaskButton";
import { useSelector, useDispatch } from "react-redux";
import * as connectActions from "../../features/connect";

function User() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  dispatch(connectActions.show());

  return (
    <main
      className={theme === "light" ? "user-page" : "user-page user-page--dark"}
    >
      <AddTaskButton />
      <TaskList />
    </main>
  );
}

export default User;

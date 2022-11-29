import useColumnDrop from "../../hooks/useColumnDrop";
import useColumnTasks from "../../hooks/useColumnTasks";
import { ColumnType } from "../../utils/enums";
import { TaskModel } from "../../utils/models";
import Task from "../Task/Task";
import addIcon from "../../assets/images/Group 1.svg";
import {
  AddImgIcon,
  Circle,
  ColumnContainer,
  ColumnContent,
  Columntext,
  TasksContainer,
} from "./styles";

function Column({ column }: { column: ColumnType }) {
  const {
    tasks,
    addEmptyTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
    updateTask,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const ColumnTasks = tasks?.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDropHover={swapTasks}
      onDelete={deleteTask}
      onUpdate={updateTask}
      column={column}
    />
  ));

  return (
    <ColumnContainer>
      <Columntext color={tasks?.length === 0 ? "#8C939F" : "black"}>
        {" "}
        {tasks?.length === 0 ? (
          <>
            <AddImgIcon src={addIcon} alt="add" onClick={addEmptyTask} />
            {column}
          </>
        ) : (
          <>
            {column} <Circle>{tasks?.length}</Circle>
          </>
        )}
      </Columntext>
      <ColumnContent ref={dropRef}>
        <TasksContainer>{ColumnTasks}</TasksContainer>
      </ColumnContent>
    </ColumnContainer>
  );
}

export default Column;

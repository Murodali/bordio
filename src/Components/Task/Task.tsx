import _ from "lodash";
import { memo } from "react";
import { useTaskDragAndDrop } from "../../hooks/useTaskDragAndDrop";
import { TaskModel } from "../../utils/models";
import {
  LineThroughText,
  TaskContainer,
  TaskContent,
  TaskDiv,
  TaskTime,
} from "./styles";

type TaskProps = {
  index: number;
  task: TaskModel;
  column: string;
  onDelete: (id: TaskModel["id"]) => void;
  onUpdate: (id: TaskModel["id"], updatedTask: TaskModel) => void;
  onDropHover: (i: number, j: number) => void;
};

function Task({
  index,
  column,
  task,
  onDropHover: handleDropHover,
  onUpdate: handleUpdate,
  onDelete: handleDelete,
}: TaskProps) {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
    { task, index: index },
    handleDropHover
  );

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };

  console.log(column);

  return (
    <TaskContainer>
      <TaskContent ref={ref} color={task.color}>
        {column === "Completed" ? (
          <LineThroughText>{task.title}</LineThroughText>
        ) : (
          <TaskDiv>{task.title}</TaskDiv>
        )}
        <TaskTime>{task.time}</TaskTime>
      </TaskContent>
    </TaskContainer>
  );
}
export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover
  ) {
    return true;
  }

  return false;
});

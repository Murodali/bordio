import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useColumnTasks from "../../hooks/useColumnTasks";
import { ColumnType } from "../../utils/enums";
import Column from "../Column/Column";
import { KonbanContainer } from "./styles";

const KanbanBoard = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <KonbanContainer>
        <Column column={ColumnType.NEW_TASK} />
        <Column column={ColumnType.SCHEDULED} />
        <Column column={ColumnType.IN_PROGRESS} />
        <Column column={ColumnType.COMPLETED} />
        <Column column={ColumnType.CREATED_NEW} />
      </KonbanContainer>
    </DndProvider>
  );
};

export default KanbanBoard;

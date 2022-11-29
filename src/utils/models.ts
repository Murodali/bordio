import { ColumnType } from './enums';

export interface TaskModel {
  id: string;
  title: string;
  column: ColumnType;
  color: string;
  time:string;
}

export interface DragItem {
  index: number;
  id: TaskModel['id'];
  from: ColumnType;
}
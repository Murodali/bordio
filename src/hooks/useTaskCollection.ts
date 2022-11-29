import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    "New task": [
      {
        id: uuidv4(),
        column: ColumnType.NEW_TASK,
        title: 'Check email',
        color: '#ABE9CE',
        time:"0.20h",
      },
      {
        id: uuidv4(),
        column: ColumnType.NEW_TASK,
        title: 'Compare PPC agencies and make a report for Steven',
        color: '#D8DCFF',
        time:"3:00h",
      },
      {
        id: uuidv4(),
        column: ColumnType.NEW_TASK,
        title: 'Meeting with Amanda (PR department)',
        color: '#ABE9CE',
        time:"0.30h"
      },
      {
        id: uuidv4(),
        column: ColumnType.NEW_TASK,
        title: "Get Patrick's approval for homepage new design",
        color: '#D8DCFF',
        time:"0.20h"
      },
    ],
    'Scheduled': [
      {
        id: uuidv4(),
        column: ColumnType.SCHEDULED,
        title: 'Check email',
        color: '#FFDFBA',
        time:"0.20h"
      },
      {
        id: uuidv4(),
        column: ColumnType.SCHEDULED,
        title: 'Write a blogpost "7 best strategies for SEO in 2020"',
        color: '#FEC6B7',
        time:"0.20h"
      },
      {
        id: uuidv4(),
        column: ColumnType.SCHEDULED,
        title: 'New Ad copies for Manamaja',
        color: '#D9E6A2',
        time:"0.20h"
      },
    ],
    'In progress': [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Check email',
        color: '#FFDFBA',
        time:"0.20h"
      },
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Write a blogpost "7 best strategies for SEO in 2020"',
        color: '#FEC6B7',
        time:"0.20h"
      },
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'New Ad copies for Manamaja',
        color: '#D9E6A2',
        time:"0.20h"
      },
    ],
    "Completed": [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Task 4',
        color: '#F0F0F0',
        time:"0.20h"
      },
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Task 4',
        color: '#F0F0F0',
        time:"0.20h"
      },
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Task 4',
        color: '#F0F0F0',
        time:"0.20h"
      },
    ],
    "Create status": []
  });
}

export default useTaskCollection;
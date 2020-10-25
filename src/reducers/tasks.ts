import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constants';
import { load } from 'redux-localstorage-simple';
import { ITask, TaskActionTypes } from '../types';

// Доупстимо any так как неизвестно что возвратит localstorage
const savedTasks: any = load({ namespace: 'todo-list' }); 

type stateTasks = ITask[];

// в reducer пойдет массив задач
const initialState: stateTasks = (savedTasks && savedTasks.tasks) ? savedTasks.tasks : [];


// здесь нам надо избавиться от деструкткризации в аргументах ф-ци ( см в отличие в filters.ts) иначе будет ошибка
// так как у нас TaskActionTypes - это объединение типов
const tasks = (state = initialState, action: TaskActionTypes): stateTasks => {
  switch (action.type) {
    case ADD_TASK :
      return [
        ...state, {
          id: action.payload.id,
          text: action.payload.text,
          isCompleted: action.payload.isCompleted,
        }
      ];
    case REMOVE_TASK:
        return [...state].filter(task => task.id !== action.payload.id);
      case COMPLETE_TASK:
        return [...state].map(task => {
          if(task.id === action.payload.id) {
            task.isCompleted = !task.isCompleted;
          }
          return task;
        });
    default:
      return state;
  }
}

export default tasks;

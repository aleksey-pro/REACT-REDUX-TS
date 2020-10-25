import { combineReducers } from 'redux';
import tasks from './tasks';
import filters from './filters';

const rootReducer = combineReducers({ tasks, filters });

export default rootReducer;
// для тестирования и если мы будем использовать форму состояния корневого редюсера
export type RootState = ReturnType<typeof rootReducer>;
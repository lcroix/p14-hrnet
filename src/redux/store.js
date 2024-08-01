import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {formReducer,employeesReducer } from './reducers/formReducer';


const rootReducer = combineReducers({
  form: formReducer,
  employees: employeesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // utilise localStorage comme stockage par défaut
import { formReducer, employeesReducer } from './reducers/formReducer';

const rootReducer = combineReducers({
  form: formReducer,
  employees: employeesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['form', 'employees'] // Liste des reducers à persister
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

const persistor = persistStore(store);

export { store, persistor };

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // uses localStorage as default storage
import { formReducer, employeesReducer } from './reducers/formReducer';

// Combine your reducers
const rootReducer = combineReducers({
  form: formReducer,
  employees: employeesReducer,
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['form', 'employees'], // Only persist these reducers
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore actions related to redux-persist that include non-serializable values
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['register', 'rehydrate'], // Ignore these paths in state
      },
    }),
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };

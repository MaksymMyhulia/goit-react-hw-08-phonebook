import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

//import { rootReducer } from './root-reducer';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';
import persistedAuthReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    filter: filterReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

// дані з локал сторіджа потрапляли відразу в redux під час завантаження
export const persistor = persistStore(store);
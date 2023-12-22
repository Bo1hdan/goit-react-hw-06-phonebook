// import { contactFormPersistedReducer } from 'redux/contactFormReducer';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer } from 'redux/reducer';

const persistConfig = {
  key: 'contactsForm',
  storage,
};

export const contactFormPersistedReducer = persistReducer(
  persistConfig,
  reducer
);

export const store = configureStore({
  reducer: contactFormPersistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

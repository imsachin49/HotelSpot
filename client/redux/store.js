// import { configureStore } from '@reduxjs/toolkit';
// import searchReducer from './searchSlice';
// import { userReducer } from 'react';
// import { combineReducers } from '@reduxjs/toolkit';

// const rootReducer = {
//   search: searchReducer,
//   user:userReducer
// };

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchReducer from './searchSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

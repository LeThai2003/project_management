import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import globalReducer from "./globals/index";
import userReducer from "./users/userSlice";
import taskReducer from "./tasks/taskSlice"

const rootReducer = combineReducers({
  globals: globalReducer,
  users: userReducer,
  tasks: taskReducer
});

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
    serializableCheck: false
  })
});

export const persistor = persistStore(store);
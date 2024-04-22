import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "./links";
import settingsReducer from "./settings";

export const store = configureStore({
  reducer: {
    links: linksReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

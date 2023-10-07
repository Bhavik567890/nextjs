import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootreducer";

export default configureStore({
  reducer: {
    root: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

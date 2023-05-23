import { configureStore } from "@reduxjs/toolkit";
import countriesApi from "./countries.query";

const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

export default store;

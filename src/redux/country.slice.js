import { createSlice } from "@reduxjs/toolkit";
import { getCountry, searchCountry } from "./country.query";

const initialState = {
  name: "",
  data: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    filterSearch: (state, { payload }) => ({
      ...state,
      data: state.data.filter((c) => c.name.includes(payload)),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getCountry.pending, (state) => ({
      ...state,
      isLoading: true,
      data: [],
    }));
    builder.addCase(getCountry.fulfilled, (state, { payload }) => ({
      ...state,
      data: [...payload],
      isLoaded: true,
      isLoading: false,
    }));
    builder.addCase(getCountry.rejected, (state, { payload }) => ({
      ...state,
      isLoading: false,
      isLoaded: true,
      error: payload,
    }));
    //
    builder.addCase(searchCountry.pending, (state) => ({
      ...state,
      isLoading: true,
      data: [],
    }));
    builder.addCase(searchCountry.fulfilled, (state, { payload }) => ({
      ...state,
      data: [...payload],
      isLoaded: true,
      isLoading: false,
    }));
    builder.addCase(searchCountry.rejected, (state, { payload }) => ({
      ...state,
      isLoading: false,
      isLoaded: true,
      error: payload,
    }));
  },
});

export const { filterSearch } = countrySlice.actions;
export default countrySlice.reducer;

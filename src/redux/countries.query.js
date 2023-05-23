import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const countriesApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    countries: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useCountriesQuery } = countriesApi;
export default countriesApi;

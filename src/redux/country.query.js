import { createAsyncThunk } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

const ApiKey = "6ey4sjw8A4R8BYLLnWiPUQ==H7kGL6nxt49Ho8lY";

export const getCountry = createAsyncThunk("country/get", async () => {
  const countries = await axios.get(
    "https://api.api-ninjas.com/v1/country?limit=30",
    {
      headers: {
        "X-Api-Key": ApiKey,
      },
    }
  );
  return countries.data || [];
});

export const searchCountry = createAsyncThunk(
  "country/search",
  async (name) => {
    const countries = await axios.get(
      `https://api.api-ninjas.com/v1/country?name=${name}`,
      {
        headers: {
          "X-Api-Key": ApiKey,
        },
      }
    );
    return countries.data || {};
  }
);

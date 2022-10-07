import { createAsyncThunk } from "@reduxjs/toolkit";
import { restEndpoint } from "./apiService";

export interface GetCharacterOpts {
  currentPage?: number;
  status?: string | boolean;
  name?: string | boolean;
  gender?: string | boolean;
}

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async ({ currentPage = 1, status, gender, name = "" }: GetCharacterOpts) => {
    try {
      let query = `${restEndpoint()}/character/?page=${currentPage}`;

      // if (page) query = `${query}&page=${page}`
      if (status) query = `${query}&status=${status}`;
      if (gender) query = `${query}&gender=${gender}`;
      if (name) query = `${query}&name=${name}`;

      const req = await fetch(query);

      if (req.status === 200) {
        const data = await req.json();

        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSingleCharacter = createAsyncThunk(
  "characters/getSingleCharacter",
  async (id: number) => {
    try {
      const req = await fetch(`${restEndpoint()}/character/${id}`);

      if (req) {
        const data = await req.json();

        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

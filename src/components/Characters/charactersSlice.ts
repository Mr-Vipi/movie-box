import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CharactersResponseType } from "../../models/characters";
import api from "../../services/api";

type CharactersType = {
  loading: boolean;
  error: boolean;
  response: CharactersResponseType[] | null;
  initialResponse: CharactersResponseType[] | null;
};

const initialState: CharactersType = {
  loading: false,
  error: false,
  response: null,
  initialResponse: null,
};

export const getCharacters = createAsyncThunk("fetch/characters", async () => {
  try {
    const response = await api.get("/characters");
    return response.data;
  } catch (error) {
    return error;
  }
});

const charactersSlice = createSlice({
  name: "charactersSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getCharacters.pending.type]: (state, action) => {
      state.loading = true;
      state.error = action;
    },
    [getCharacters.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action;
    },
    [getCharacters.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
      state.initialResponse = action.payload;
    },
  },
});

export const charactersSelector = (state: any) => state.characters;
export default charactersSlice.reducer;

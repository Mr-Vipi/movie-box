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
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
      state.initialResponse = action.payload;
    });
    builder.addCase(getCharacters.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const charactersSelector = (state: { characters: CharactersType }) =>
  state.characters;
export default charactersSlice.reducer;

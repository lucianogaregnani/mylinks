import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Link } from "../../../types/Link.type";

const initialState: Link[] = [];

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    changeLinks: (_state, action: PayloadAction<Link[]>) => {
      return action.payload;
    },
  },
});

export default linksSlice.reducer;
export const { changeLinks } = linksSlice.actions;

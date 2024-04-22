import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Setting } from "../../../types/Settings.type";

const initialState: Setting = {
  type: "default",
  username: "",
  title: "",
  id: "",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeSettings: (_state, action: PayloadAction<Setting>) => {
      return action.payload;
    },
    changeType: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        type: action.payload,
      };
    },
    changeUsername: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        username: action.payload,
      };
    },
    changeTitle: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        title: action.payload,
      };
    },
  },
});

export default settingsSlice.reducer;
export const { changeType, changeUsername, changeTitle, changeSettings } =
  settingsSlice.actions;

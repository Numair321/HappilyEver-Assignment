// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { setName, setAge } = userSlice.actions;
export default userSlice.reducer;

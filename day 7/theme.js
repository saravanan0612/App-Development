import {createSlice} from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name : 'theme',
    initialState : {value : {color: 'black'}},
    reducers: {
        changeColor : (state, action) => {
              state.value = action.payload
        },
    }
});

export const {changeColor} = themeSlice.actions;
export default themeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name : 'Todo List',
    initialState : 
    {
        values : []
    },
    reducers: {
        add : function(state,action)
        {
            state.values = [...state.values, action.payload]
        },
        del : function(state,action)
        {
            state.values = state.values.filter((item,id) => {
                return id!= action.payload 
            })
        },
        edit: function(state, action) {
            const { index, value } = action.payload;
            state.values[index] = value;
        },
        clear: function(state, action) {
            state.values = [];
        }
    }
})

export const {add , del , edit , clear} = Slice.actions

const reducer = Slice.reducer

export default reducer;

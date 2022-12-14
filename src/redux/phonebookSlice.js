import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

export const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        saveContact: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: ({ name, number }) => {
                const id = nanoid();
                return { payload: { name, number, id } }
            },
        },
        deleteContact(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
        
    }
})

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changeFilter(_, action) {
            return action.payload;
        }
    }
});

export const phonebookReducer = combineReducers({
    items: itemsSlice.reducer,
    filter: filterSlice.reducer,
})


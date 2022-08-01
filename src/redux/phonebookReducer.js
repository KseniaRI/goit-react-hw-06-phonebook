import { createReducer } from "@reduxjs/toolkit";
import { saveContact, deleteContact, changeFilter } from "./phonebookActions";

export const items = createReducer([], {
    [saveContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => state.filter(item => item.id !== action.payload),
});

export const filter = createReducer('', {
    [changeFilter]: (state, action) => action.payload,
});



import { createAction } from "@reduxjs/toolkit";

export const saveContact = createAction('phonebook/save');
export const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('filter/change');
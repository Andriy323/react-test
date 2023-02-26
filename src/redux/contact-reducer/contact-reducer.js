import { createReducer } from "@reduxjs/toolkit";
import { addContacts, deletContact } from "redux/contactAction";
const contactReduce = createReducer([], {
[addContacts]: ((state, {payload}) => [...state, payload]),
[deletContact]: ((state, {payload}) => state.filter(item => item.id !== payload))
})

export default contactReduce
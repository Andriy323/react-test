import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: []
    },
    reducers:{
        addContact(state, action) {
            console.log(action, "ac")
            console.log(state, "st")

            state.contacts.push({
                name: action.payload.name,
                number: action.payload.number,
                // name: "aaaa",
                // number: "56565656",
                id: nanoid()
            })
        },
        removContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
        }
    }
})
export const {addContact, removContact} = contactSlice.actions
export default contactSlice.reducer
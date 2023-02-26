import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push({
        name: action.payload.name,
        number: action.payload.number,
        id: nanoid(),
      });
    },
    removContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducerContact = persistReducer(
  persistConfig,
  contactSlice.reducer
);
export const { addContact, removContact, setFilter } = contactSlice.actions;
export default persistedReducerContact;

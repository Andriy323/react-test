import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getContactsApi, deleteContactApi, addContactApi } from 'helpers/fetch';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const data = await getContactsApi();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/removeContact',
  async function (id, { dispatch, rejectWithValue }) {
    try {
      await deleteContactApi(id);

      dispatch(removContact({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async function ({ name, number }, { dispatch, rejectWithValue }) {
    try {
   
      const data = await addContactApi({name,number});

      dispatch(addContact(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    removContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;

      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

export const { addContact, removContact, setFilter } = contactSlice.actions;
export default contactSlice.reducer;

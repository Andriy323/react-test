import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { singup, logIn, logOut, getCurrentUser } from 'helpers/fetch';
import Notiflix from 'notiflix';
import 'react-toastify/dist/ReactToastify.css';

export const singupUser = createAsyncThunk(
  'users/register',
  async function (dataSingup, { rejectWithValue }) {
    try {
      const data = await singup(dataSingup);
      return data;
    } catch (error) {
      return rejectWithValue(Notiflix.Notify.failure(error.message));
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/login',
  async function (dataLogin, { rejectWithValue }) {
    try {
      const data = await logIn(dataLogin);
      return data;
    } catch (error) {
      return rejectWithValue(Notiflix.Notify.failure(error.message));
    }
  }
);

export const logOutUser = createAsyncThunk(
  'users/logout',
  async function (_, { rejectWithValue }) {
    try {
      await logOut();
    } catch (error) {
      return rejectWithValue(Notiflix.Notify.failure(error.message));
    }
  }
);

export const currentUser = createAsyncThunk(
  'users/current',
  async function (_, { rejectWithValue, getState }) {
    const state = getState();
    let token = state.autch.token;
    if (token === null) {
    }

    try {
      const { data } = await getCurrentUser(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
};

const autchSlise = createSlice({
  name: 'autch',
  initialState,
  extraReducers: {
    [singupUser.pending]: state => {
      state.loading = false;
    },
    [singupUser.fulfilled]: (state, action) => {
      state.loading = false;

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [singupUser.rejected]: state => {
      state.loading = false;
    },
    [loginUser.pending]: state => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.rejected]: state => {
      state.loading = false;
      state.isLoggedIn = false;
    },
    [logOutUser.fulfilled](state) {
      state.loading = false;

      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [currentUser.pending](state, action) {
      state.loading = true;

      state.user = { ...action.payload };
      state.isRefreshing = true;
      state.isLoggedIn = true;
    },
    [currentUser.fulfilled](state, action) {
      state.loading = false;

      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [currentUser.rejected](state) {
      state.loading = false;

      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
  },
});

export default autchSlise.reducer;

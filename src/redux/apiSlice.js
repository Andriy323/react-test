import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.apilayer.com/exchangerates_data',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: base => ({
        url: `/latest?symbols=UAH%2CUSD%2CEUR&base=${base}`,
        headers: {
          apikey: 'zQIn97tCUkXPH6kQ7gbfgJSFBM4zl24y',
        },
      }),
    }),
  }),
});

export const { useGetContactsQuery } = apiSlice;

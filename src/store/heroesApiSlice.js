import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from "../config";

export const heroesApiSlice = createApi({
  reducerPath: 'heroes',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: builder => ({
    getHeroes: builder.query({
      query: () => '/heroes',
    }),
    getHero: builder.query({
      query: heroId => `/heroes/${heroId}`,
    })
  }),
});

export const { useGetHeroesQuery, useGetHeroQuery } = heroesApiSlice;
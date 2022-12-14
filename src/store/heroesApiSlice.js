import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from "../config";

const heroesApiSlice = createApi({
  reducerPath: 'heroes',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: builder => ({
    getHeroes: builder.query({
      query: (filters) => ({
        url: '/character',
        method: 'GET',
        params: { 
          name: filters.name ? filters.name : '',
          status: filters.status ? filters.status : '',
          species: filters.species ? filters.species : '',
          gender: filters.gender ? filters.gender : '',
          page: filters.page ? filters.page : 1
        }
      }),
    }),
    getHero: builder.query({
      query: heroId => `/character/${heroId}`,
    }),
    getFavoriteHeroes: builder.query({
      query: heroesIds => `character/${heroesIds}`,
      transformResponse(response) {
        return Array.isArray(response) ? response : [response];
      }
    })
  }),
});

export const { useGetHeroesQuery, useGetHeroQuery, useGetFavoriteHeroesQuery } = heroesApiSlice;

export default heroesApiSlice;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "f826710696mshb67fd82e3ecf232p139c13jsn7acf56ce7d55",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetCryptoQuery, useGetExchangesQuery } = cryptoApi;

// const options = {
// 	method: 'GET',
// url: 'https://coinranking1.p.rapidapi.com/coins',
// 	headers: {
// 		'X-RapidAPI-Key': 'f826710696mshb67fd82e3ecf232p139c13jsn7acf56ce7d55',
// 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// 	}
// };

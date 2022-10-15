import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const BASE_URL = 'https://api.themoviedb.org/3'

export const axiosnetflixOriginals = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`
export const axiosTrending = `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
export const axiosTopRated =  `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const axiosActionMovies = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
export const axiosComedyMovies = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
export const axiosHorrorMovies =  `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
export const axiosRomanceMovies =  `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
export const axiosDocumentaries = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`


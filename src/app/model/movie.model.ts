import { Cast } from "../@types/cast";
import { Genre } from "../@types/genre";

export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genres: Genre[];
    cast: Cast[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number
}



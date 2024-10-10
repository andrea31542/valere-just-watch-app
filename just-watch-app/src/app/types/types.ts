export type FilterTypes = 'genres' | 'score' | 'years';
export type MovieResponseType = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TopRatedMoviesResponseType = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type FilterParams = {
  page?: number;
  with_genres?: number[];
  without_genres?: number[];
};

export type MovieDetailType = {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: string;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompanyType[];
  production_countries?: ProductionCountryType[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type ProductionCompanyType = {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
};

export type ProductionCountryType = {
  iso_3166_1?: string;
  name?: string;
};

export type SpokenLanguage = {
  english_name?: string;
  iso_639_1?: string;
  name?: string;
};

export type MemberType = {
  adult?: boolean;
  gender?: number;
  id: number;
  known_for_department?: string;
  name: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
  credit_id: string;
};

export type CastMember = MemberType & {
  order: number;
  cast_id: number;
  character: string;
};

export type CrewMember = MemberType & {
  department: string;
  job: string;
};

export type MovieCreditsResponse = {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
};

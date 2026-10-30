export interface CharacterListResponse {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Place;
  location: Place;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Place {
  name: string;
  url: string;
}

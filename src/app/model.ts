export interface Band {
  name: string;
  bio: string;
  links: BandLinks;
  genres: string[];
  members: string[];
}

export interface BandLinks {
  wikipediaUrl: string;
  photoUrl: string;
}
export interface IGeoDB {
  data: IGeoDBData[];
  links?: IGeoDBLinks[];
  metadata: IGeoDBMetadata;
}

export interface IGeoDBData {
  id: number;
  wikiDataId: string;
  type: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  latitude: number;
  longitude: number;
  population: number;
}

export interface IGeoDBLinks {
  rel: "first" | "last" | "next";
  href: string;
}

export interface IGeoDBMetadata {
  currentOffset: number;
  totalCount: number;
}

export interface IGeoDB {
  data: IGeoDBData[];
  links?: IGeoDBLinks[];
  metadata: IGeoDBMetadata;
}

interface IGeoDBData {
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

interface IGeoDBLinks {
  rel: "first" | "last" | "next";
  href: string;
}

interface IGeoDBMetadata {
  currentOffset: number;
  totalCount: number;
}

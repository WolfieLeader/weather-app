import { writable } from "svelte/store";

interface ILocationStore {
  city: string;
  country: string;
  timezone: string;
  coords: {
    latitude: number;
    longitude: number;
  } | null;
}

export const locationStore = writable<ILocationStore>({
  city: "",
  country: "",
  timezone: "",
  coords: null,
});

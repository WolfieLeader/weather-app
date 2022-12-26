const list = {
  "01d": "Sun",
  "01n": "Moon",
  "02d": "CloudSun",
  "02n": "CloudMoon",
  "03d": "Clouds",
  "03n": "Clouds",
  "04d": "Clouds",
  "04n": "Clouds",
  "09d": "RainSun",
  "09n": "RainMoon",
  "10d": "RainSun",
  "10n": "RainMoon",
  "11d": "Thunderstorm",
  "11n": "Thunderstorm",
  "13d": "Snow",
  "13n": "Snow",
  "50d": "Fog",
  "50n": "Fog",
} as const;

const iconList = Object.entries(list).map(([key, value]) => ({ iconCode: key, represents: value } as const));

export default iconList;

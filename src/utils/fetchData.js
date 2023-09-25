export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '504f636293mshe5eea3058c5b242p14d331jsn348db4efcf97',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '504f636293mshe5eea3058c5b242p14d331jsn348db4efcf97',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

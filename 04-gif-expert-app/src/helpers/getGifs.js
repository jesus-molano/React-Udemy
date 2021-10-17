
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=4j3Gn8Ef6wRe5OnS4RV0RXVMAXdtV8aM`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title: title.replace('GIF', ''),
      url: images?.downsized_medium.url,
    };
  });
  return gifs;
};
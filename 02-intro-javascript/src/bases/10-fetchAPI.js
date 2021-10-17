// Fetch API

const apiKey = '4j3Gn8Ef6wRe5OnS4RV0RXVMAXdtV8aM';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
  .then(res => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img)
  })
  .catch(err => console.error);
// const getImagePromise = () => {
//   return new Promise((res, rej) => {
//     res('https://123.com');
//   })
// }

// getImagePromise
//   .then(console.log)
//   .catch(console.error)


// ASYNC - AWAIT
const getImage = async () => {
  const apiKey = '4j3Gn8Ef6wRe5OnS4RV0RXVMAXdtV8aM';
  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await res.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  } catch (err) {
    console.error(err);
  }
}

getImage();

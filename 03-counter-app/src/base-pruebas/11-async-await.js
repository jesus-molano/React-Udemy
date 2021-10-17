export const getImage = async () => {
    const apiKey = '4j3Gn8Ef6wRe5OnS4RV0RXVMAXdtV8aM';
    try {
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await res.json();
        const { url } = data.images.original;
        return url;
    } catch (error) {
        return 'No existe';
    }
}



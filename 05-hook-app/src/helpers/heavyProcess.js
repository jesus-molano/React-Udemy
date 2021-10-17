const heavyProcess = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Heeey! soy una llamada");
  }
  return `${iterations} iteraciones realizadas`;
}

export default heavyProcess;
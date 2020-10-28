
const initialConfiguration = [1, 0, 1, 1];
const K = 2;

const nextStep = (cells) => {
  if (!cells.includes(1)) return cells;

  let newConfiguration = [...cells];
  
  for (let i = 0; i < cells.length; i++) {
    if (i === 0) // first cell
      newConfiguration[i] = cells[cells.length - 1] === cells[i + 1] ? 0 : 1;
    else if (i === (cells.length - 1)) // last cell
      newConfiguration[i] = cells[i - 1] === cells[0] ? 0 : 1;
    else
      newConfiguration[i] = cells[i - 1] === cells[i + 1] ? 0 : 1;
  }
  return newConfiguration;
}

const main = (initialConfiguration, K) => {
  if (K < 1) return initialConfiguration; // check K value
  if (initialConfiguration.length === 0) return initialConfiguration; // check array length
  if (initialConfiguration.some(item => (item !== 1 && item !== 0))) // check array items value
    return initialConfiguration;

  let currentConfiguration = initialConfiguration;
  for (let i = 0; i < K; i++) {
    currentConfiguration = nextStep(currentConfiguration);
  }
  return currentConfiguration;
}

console.log(main(initialConfiguration, K));

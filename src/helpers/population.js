export default function calculatePopulation(number) {
  let str = "";
  if (number > 1000) {
    str = `${Math.abs(number / 1000).toFixed(2)}M`;
  } else {
    str = `${Math.abs(number).toFixed(2)}K`;
  }

  return str;
}

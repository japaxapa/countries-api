export function useGetRandomElements(data, num) {
  function getRandomElements(arr, num) {
    let result = [...arr]; // Copy the original array to avoid mutating it
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Pick a random index
      [result[i], result[j]] = [result[j], result[i]]; // Swap elements
    }
    return result.slice(0, num); // Return the first `num` elements
  }

  if (!data) {
    return;
  }

  return getRandomElements(data, num);
}

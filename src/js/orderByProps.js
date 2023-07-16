export default function orderByProps(obj, given) {
  const result = [];

  function pushSort(array) {
    for (const i of array) {
      result.push({ key: i, value: obj[i] });
    }
  }

  pushSort(given);
  pushSort(Object.keys(obj).filter((el) => !given.includes(el)).sort());

  return result;
}

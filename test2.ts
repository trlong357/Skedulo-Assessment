let test1 = [
  { startPx: 10, endPx: 30 },
  { startPx: 55, endPx: 65 },
  { startPx: 35, endPx: 50 },
  { startPx: 20, endPx: 40 },
  { startPx: 60, endPx: 70 },
  { startPx: 20, endPx: 40 },
];

let test2 = [
  { startPx: 10, endPx: 30 },
  { startPx: 20, endPx: 40 },
];

const unionItems = (
  items: {
    startPx: number;
    endPx: number;
  }[]
) => {
  items.sort((a, b) => a.startPx - b.startPx);
  let result: {
    startPx: number;
    endPx: number;
  }[] = [];
  let current: {
    startPx: number;
    endPx: number;
  } = items[0];
  for (let i = 1; i < items.length; i++) {
    if (current.endPx >= items[i].startPx) {
      current.endPx = Math.max(current.endPx, items[i].endPx);
    } else {
      result.push(current);
      current = items[i];
    }
  }
  result.push(current);
  return result;
};

console.log(unionItems(test1));
console.log(unionItems(test2));

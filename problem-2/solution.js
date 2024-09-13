function unionOverlappingItems(items) {
  // Sort items by startPx
  items.sort((a, b) => a.startPx - b.startPx);

  const result = [];
  let currentItem = items[0];

  for (let i = 1; i < items.length; i++) {
    const item = items[i];

    // If the current item overlaps with the next item, update the endPx of the current item
    if (currentItem.endPx >= item.startPx) {
      currentItem.endPx = Math.max(currentItem.endPx, item.endPx);
    } else {
      // Otherwise, add the current item to the result and set the next item as the new current item
      result.push(currentItem);
      currentItem = item;
    }
  }

  // Add the last current item to the result
  result.push(currentItem);

  return result;
}

const unavailableItems = [
  { startPx: 10, endPx: 30 },
  { startPx: 55, endPx: 65 },
  { startPx: 35, endPx: 50 },
  { startPx: 20, endPx: 40 },
  { startPx: 60, endPx: 70 },
];

const nonOverlappingItems = unionOverlappingItems(unavailableItems);
console.log(nonOverlappingItems);

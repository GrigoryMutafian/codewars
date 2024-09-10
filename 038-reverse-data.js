function dataReverse(data) {
  const countOfSegments = data.length / 8;

  let dataIndex = 0;
  const dynamicArray = [];
  const result = [];

  for (let i = 0; i < countOfSegments; i++) {
    for (let y = 0; y < 8; y++) {
      dynamicArray.unshift(data[dataIndex]);
      dataIndex++;
    }

    dynamicArray.reverse();
    result.push([...dynamicArray]);
    dynamicArray.length = 0;
  }

  return result.reverse().flat();
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);

// For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.

// function getChecksum(data) {
//   let results = []
//   data.forEach(line => {
//     let smallest
//     let largest = 0
    
//     line.forEach(item => {
//       if (isNaN(smallest)) {
//         // console.log("New smallest: ", item)
//         smallest = item
//       } else if (item < smallest) {
//         // console.log("New smallest: ", item)
//         smallest = item
//       } else if (item > largest) {
//         // console.log("New largest: ", item)
//         largest = item
//       }
//     });
//     // console.log("Smallest: ", smallest)
//     // console.log("Largest: ", largest)
//     let diff = (largest - smallest)
//     // console.log("Difference: ", diff)
//     // console.log()
//     results.push(diff)
//   });
//   // console.log(results)
//   const add = (nextValue, currentValue) => nextValue + currentValue
//   return results.reduce(add)
// }

function getChecksum(data) {
  let results = []
  data.forEach(line => {
    let smallest
    let largest = 0
    
    line.forEach(item => {
      if (isNaN(smallest)) {
        smallest = item
      } else if (item < smallest) {
        smallest = item
      } else if (item > largest) {
        largest = item
      }
    });
    
    let diff = (largest - smallest)
    results.push(diff)
  });
  const add = (nextValue, currentValue) => nextValue + currentValue
  return results.reduce(add)
}

var easyData = [
  [2, 3, 7, 8],
  [0, 1, 3],
  [9, 2, 8, 3]
]

var data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]

console.log(getChecksum(data))
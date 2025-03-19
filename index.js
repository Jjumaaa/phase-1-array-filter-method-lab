// Code your solution here
const users = [
    { name: "Bobby", hometown: "Pittsburgh" },
    { name: "salim", hometown: "Unknown" },
    { name: "Mikey", hometown: "Unknown" },
    { name: "Peter", hometown: "Unknown" },
    { name: "Bobby", hometown: "Tampa Bay" },
    { name: "Salim", hometown: "Unknown" },
];

function findMatching(array, string) {
  let newArray = array.filter((input) =>
    input.toLowerCase().startsWith(string.toLowerCase())
  );
  return newArray;
}

function fuzzyMatch(array, string) {
  let newArray = array.filter((input) => input.startsWith(string));
  return newArray;
}

function matchName(array, string) {
  let newArray = array.filter((input) => input.name === string);
  return newArray;
}
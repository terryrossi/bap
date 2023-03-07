const bullsList = [
  { id: 1, guild: "East", type: "Bull" },
  { id: 2, guild: "South", type: "Bull" },
  { id: 3, guild: "North", type: "God" },
  { id: 4, guild: "West", type: "God" },
];
const labelList = [
  "First",
  "Second",
  "third",
  "Fourth",
  "Fith",
  "Sixth",
  "Seventh",
  "Eighth",
  "Nineth",
  "Tenth",
];

for (i = 0; i < bullsList.length; i++) {
  console.log(
    `The ${labelList[i]} ${bullsList[i].type} is from the ${bullsList[i].guild} Guild`
  );
}

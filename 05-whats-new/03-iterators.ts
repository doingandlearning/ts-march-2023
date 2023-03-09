const olympians = [
  "Michael Phelps",
  "Usain Bolt",
  "Simone Biles",
  "Serena Williams",
  "Katie Ledecky",
];

for (let i = 0; i < olympians.length; i++) {
  console.log(olympians[i]);
}

for (const olympian of olympians) {
  console.log(olympian);
}

const olympian = "Katie Ledecky";

for (const char of olympian) {
  console.log(char);
}

const medallists = {
  "Michael Phelps": 28,
  "Usain Bolt": 8,
  "Simone Biles": 7,
  "Serena Williams": 4,
  "Katie Ledecky": 6,
};

for (const [olympian, medals] of Object.entries(medallists)) {
  console.log(`${olympian} has won ${medals} medals`);
}

for (const medal in medallists) {
  console.log(`${medal} has won ${medallists[medal]} medals`);
}

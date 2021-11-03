const users = [
  {
    name: "Ogeday",
    age: 30,
  },
  {
    name: "Ahmet",
    age: 16,
  },
  {
    name: "Caner",
    age: 58,
  },
];

// push array sonuna ekleme yapar
console.log("--------------------------------------------");
users.push({ name: "Mahmut" });
users.push({ name: "Bahadır" });
console.log(users);
console.log("--------------------------------------------");

// map arrayi dönmemizi sağlar
//---------------------------------------------------
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }
//---------------------------------------------------
// users.map((item) => {
//   console.log(item);
// });
//---------------------------------------------------
users.map((item) => {
  console.log(item.name);
});
console.log("--------------------------------------------");

// find=> array içerisinde arama yapmamızı sağlar.
const findIt = users.find((item) => item.name === "Ogeday" && item.age < 40);
console.log(findIt);
console.log("--------------------------------------------");

// filter
const filterIt = users.filter(
  (item) => item.name === "Ogeday" && item.age === 30
);
console.log(filterIt);
console.log("--------------------------------------------");

// some=> array içinde koşula uyuyorsa true döndürüyor.
const some = users.some((item) => item.age === 56);
console.log(some);
console.log("--------------------------------------------");

// every=> tüm elemanlar koşula uyarsa true döndürür.
const every = users.every((item) => item.name === "Ogeday");
console.log(every);

// includes
console.log("--------------------------------------------");
const fruits = ["elma", "armut", "muz"];
const isInclude = fruits.includes("muz");
console.log(isInclude);

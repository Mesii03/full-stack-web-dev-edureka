let x = 10;
let y = 20;
if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("y is greater than x");
}

let z = "one";
switch (z) {
  case "one":
    console.log("Hello from case one");
    break;
  case "two":
    console.log("Hello from case two");
    break;
  case "three":
    console.log("Hello from case three");
    break;
  default:
    console.log("Invalid Input");
    break;
}

let k = 1;
let sum = 0;
while (k <= 10) {
  sum = sum + 10;
  k += 1;
}
console.log(sum);

for (let i = 0; i < 5; i++) {
  console.log("Welcome to veranda");
}

const newObj = [
  {
    id: 1,
    order: "Below500",
    "order percentage": "10.05",
    restaurant: "Punjabi Tadka",
  },
  {
    id: 2,
    order: "500-1000",
    "order percentage": "14.57",
    restaurant: "Punjabi Tadka",
  },
  {
    id: 3,
    order: "1000-1500",
    "order percentage": "15.08",
    restaurant: "Punjabi Tadka",
  },
  {
    id: 4,
    order: "1500-2000",
    "order percentage": "22.11",
    restaurant: "Punjabi Tadka",
  },
  {
    id: 5,
    order: "Above2000",
    "order percentage": "38.19",
    restaurant: "Punjabi Tadka",
  },
];
for (let obj of newObj) {
  console.log(obj["order percentage"]);
}

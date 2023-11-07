const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Apple",
    unitPrice: 15000,
    amount: 300,
    totalPrice: 1500000,
    casherId: 2,
    date: "2022-11-02",
  },
  {
    productName: "Candy",
    unitPrice: 4000,
    amount: 300,
    totalPrice: 400000,
    casherId: 3,
    date: "2022-11-02",
  },
  {
    productName: "Phone",
    unitPrice: 500000,
    amount: 20,
    totalPrice: 100000000,
    casherId: 2,
    date: "2022-11-01",
  },
  {
    productName: "Balloon",
    unitPrice: 50,
    amount: 2000,
    totalPrice: 100000,
    casherId: 1,
    date: "2022-11-03",
  },
];

// borluulaltiin niilber dung oruulah task
console.log("Task1:");
let totalsale = 0;

for (let i in data) {
  totalsale += data[i].totalPrice;
}

console.log(totalsale);

//borluulagdsan baraanii toog oloh task
console.log("Taks2:");
let totalnumber = 0;

for (let i in data) {
  totalnumber += data[i].amount;
}
console.log(totalnumber);

// hamgiin ih zaragdsan 3 baraanii jagsaalt by borluulaltiin dunger
console.log("Task3:");
let topindex = 3;
let reserve = {};
let top3productName = [];

for (let i in data) {
  for (let k in data)
    if (data[i].totalPrice > data[k].totalPrice) {
      reserve = data[i];
      data[i] = data[k];
      data[k] = reserve;
    }
}

top3productName = data.slice(0, topindex);
for (let i in top3productName) {
  console.log(top3productName[i].productName);
}
// hamgiin ih zaragdsan 3 baraanii jagsaalt by borluulaltiin too
console.log("Task4:");
let reserve2 = {};
let top3productName2 = [];

for (let i in data) {
  for (let k in data)
    if (data[i].amount > data[k].amount) {
      reserve2 = data[i];
      data[i] = data[k];
      data[k] = reserve2;
    }
}

top3productName2 = data.slice(0, topindex);
for (let i in top3productName2) {
  console.log(top3productName2[i].productName);
}

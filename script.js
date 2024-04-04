const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = arr.reduce(
  (acc, curr) => {
    acc.balance = acc.balance + curr;
    return acc;
  },
  { balance: 0 }
);

console.log(sum);

const nums = [44, 22, 77, 99, 10, 30];

const maxNum = nums.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, 0);
console.log(maxNum);

const items = [
  { price: 100, qty: 5 },
  { price: 50, qty: 2 },
  { price: 20, qty: 3 },
  { price: 40, qty: 7 },
];

const total = items.reduce(
  (acc, cur) => {
    acc.totalPrice = acc.totalPrice + cur.price * cur.qty;
    acc.totalQty = acc.totalQty + cur.qty;
    return acc;
  },
  { totalPrice: 0, totalQty: 0 }
);

console.log(total);

const x = [{ x: 10 }, { x: 7 }, { x: 55 }];

const y = x.reduce(
  (acc, curr) => {
    acc.x = acc.x + curr.x;
    return acc;
  },
  { x: 0 }
);

console.log(y);

const fruits = [
  "apples",
  "orange",
  "apples",
  "kiwi",
  "banana",
  "orange",
  "apples",
];

const fruitQty = fruits.reduce(
    (acc, curr) => {
      if (acc[curr]) {
        acc[curr] = acc[curr] + 1;
      }
      else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
  
  console.log(fruitQty);


  let voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Joey', age: 43, voted: false},
    {name: 'Jeff', age: 41, voted: true},
    {name: 'Zack', age: 19, voted: true},
  ];

  const votersQty = voters.reduce(
    (acc, curr) => {
      if (curr["voted"] === true) {
        acc = acc + 1;
      }
      return acc;
    }, 0);
  
  console.log(votersQty);

  const votersAge = voters.reduce(
    (acc, curr) => {
      if (curr["age"] > 18 && curr["age"] < 31) {
        acc.youngAge++;
      }
      else if (curr["age"] < 51 && curr["age"] > 31) {
        acc.midAge++;
      }
      else {
        acc.oldAge++;
      }
      return acc;
    }, {youngAge: 0, midAge: 0, oldAge: 0});
  
  console.log(votersAge);



  const findOut = (text) => {
   const check = /^[A-Z]/;

  console.log(check.test(text));
  };

  findOut("Sdfghjk.lk;lj b ")

  const number = (text) => {
    const check = /^(\+?998)?\d{9}$/
 
   console.log(check.test(text));
   };
 
   number("998907777777")

   const email = (text) => {
    const check = /^\w+@[a-z]{4,5}\.[a-z]{2,3}$/
 
   console.log(check.test(text));
   };
 
   email("bob349@mail.ru")


   
   const date = (text) => {
    const check = /^[0-9]{2}-[0-9]{2}-[0-9]{4}$/
 
   console.log(check.test(text));
   };
 
   date("01-01-2024")


   const find = (text) => {
    console.log(text.replace(/5/g, "five"))
   };

   find("They ate 5 apples and 5 oranges")


   const find2 = (text) => {
    console.log(text.replace(/[!,)]/g, ""))
   };

   find2("hello! My name, is ) Sarah")


   const find3 = (text) => {
    console.log(text.replace(/[a-z]/g, ""))
   };

   find3("buc8778bc8we84g3gb4w6bw646tsayshcdgt554r6")


   const name = (text) => {
    const check = /^[A-Z]{1}[a-z]{2,15}$/
 
   console.log(check.test(text));
   };
 
   name("Valery")





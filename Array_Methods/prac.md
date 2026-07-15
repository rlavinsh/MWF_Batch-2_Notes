const products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics", stock: 5 },
  { id: 2, name: "Phone", price: 30000, category: "Electronics", stock: 8 },
  { id: 3, name: "Shoes", price: 4000, category: "Fashion", stock: 0 },
  { id: 4, name: "Watch", price: 2500, category: "Fashion", stock: 12 },
  { id: 5, name: "TV", price: 60000, category: "Electronics", stock: 2 },
  { id: 6, name: "Bag", price: 1500, category: "Fashion", stock: 15 },
];

// 1. Sirf product names nikalo.
// 2. 5000 se expensive products nikalo.
// 3. Out of stock products nikalo.
// 4. Sabhi products ki total inventory value nikalo.
// formula: price × stock
// 5. Sabhi products par 10% discount laga kar new array banao.
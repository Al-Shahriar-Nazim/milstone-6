// ---------------------Class (constractor)------------------------------
class book {
  constructor(BookName, prices) {
    this.BookName = BookName;
    this.prices = prices;
  }
}
let BookDetails = new book("rice dad", "300tk");
console.log(BookDetails);

//--------------------------------------------------------
class prodact {
  constructor(name,price) {
    this.name=name;
    this.price=price;
  }
}
let prodactList = new prodact("Wails","443");
console.log(prodactList);

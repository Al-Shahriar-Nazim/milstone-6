class parents {
  Assets1() {
    console.log("aita amer dada assets");
  }
  Assets2() {
    console.log("aita amer babar assets");
  }
}
class ami extends parents{
  myAssets() {
    super.Assets1();
    super.Assets2();
  }
}
let myAssets = new ami();
myAssets.myAssets();

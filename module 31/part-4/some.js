/**
 * 1. map()        ----  akta array te jay jotto condition ase sob fulfile kore and seta reurn kore
 * 2. forEach ()  ----   map er moto but retrun kore nh
 * 3.  fileter ( )  ----- akta array te jabe and sorto jara fulfil kore tader sob value output deve
 * 4. find ( )      ------ fillter er motoi . filter condition onujay sob value return korbe but find condition maching holeo sudu first value output debe.
 */

// ------------------------------forEach() -------------------------------------------------
//..........................................................................................................................
const number = [1, 2, 3, 4, 5, 6, 7];
const result = number.forEach(n=>n*2);
console.log(result)
//output : undefined [ beacuse forEach kono kisu return kore nh]

const number1 = [1, 2, 3, 4, 5, 6, 7];
const result1 = number1.forEach(n=>console.log(n));
console.log(result)


// ------------------------------ filter( ) -------------------------------------------------
//..........................................................................................................................
const playerHeight =[90,87,65,54,89];
const selectedPlayer =playerHeight.filter(height =>height>70)
console.log(selectedPlayer)

//------odd players----------------------
const playerHeight2 =[90,87,65,54,89];
const selectedPlayer2=playerHeight2.filter(odd=>odd%2==1)
console.log(selectedPlayer2);

// ------------------text length---------------
const friends = ['nazim', 'jon', 'bon','jibon' ,'moron', 'jamal', 'kamal'];
const selectedLenght =friends.filter(l=>l.length>4)
console.log(selectedLenght)

// ------------------------------ find( ) -------------------------------------------------
//..........................................................................................................................
const number5 = [70,66,54,90,60];
const result5= number5.find(f=>f>60)
console.log(result5)
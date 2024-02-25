// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} yesrs old. Happy birthday to me!`);
    
//}



//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
 // }

 // return gifts;
//}

//wrapGifts(gifts);


function writeCards(a,b) {
  let msj = [];
  for (let i = 0; i < a.length; i++) {
    msj.push(`Thank you, ${a[i]}, for the wonderful ${b} gift!`); 
  }
  return msj;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "suprise")

function countDown(c) {
  while (c >= 0) {
    console.log(c);
    c--;
  }
}
countDown(c)
const ages =[12,15,14,19,20];
const ages2=[50,60,40,30];
const ages3=[40,80,120,];
// const allages = ages.concat(ages2);

const allages2=[...ages,...ages2,...ages3]
// console.log(allages);
console.log(allages2);

// maximum ber kora 
const money =20 ;
const money2 =40 ;
const money3 =60 ;
const maximum=Math.max(money,money2,money3);
console.log('that was the maximum value',maximum);

// other way
const taka=[100,200,300,400,500,800]
const maxtaka=Math.max(...maxtaka)
console.log(maxtaka);
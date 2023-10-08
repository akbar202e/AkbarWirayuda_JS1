//  if+else
let x=20
if (x<=5) {
    console.log("gk tuntas");
}
else{
   console.log("bolehh");}

// Nested if
if (x<=5) {
    console.log("belajar lagi deck");
} else if (x>=6,x<=10) {
    console.log("sepuh");
} else{
    console.log("waduh");
}

// switch
switch (x=0){
    case 0:
        console.log("emang boleh?");
    break;
    case 10:
        console.log("ajarin dong puh");
    break;
    case 5:
        console.log("tanggung gan");
    break;
    default:
        console.log("berchanda");}

// for
for(let i=0; i<=5;i++){
    console.log("for ke-" + i);}

// while
while (x<=5) {
    console.log("while ke-"+x);
    x++;}

// dowhile
let p=0
do {
    
    let kosong="while do ke-"
    console.log(kosong+p);
    p++
} while (p<=5);


// function
let o= pungcion(23,3);
console.log("function "+o);

function pungcion(a,b) {
    return a*b;
}
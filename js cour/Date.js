// const a = 40;
//     const b = a * 4;
//     const c = b + 8 ;
//     const x = c - 30;
//     const y = x / 6;

// var total = {a,b,c,x,y}

// function myFunction(data) {

//     console.log(data)
// }

// myFunction(total);

let str = '';

for (let i = 0; i < 15; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678911121314

function age(a) {
    let result;
    if (a > 18) {
      result = "Bienvenue";
    } else {
      result = "Tire toi kiddo";
    }
    return result;
  }console.log(age(15));                // résultat attendu: "Tire toi kiddo"

  function annee(b){
      let result;
      if (b < 2003) {
          result = "prime exceptionel";
        } else {
            result = "nadda nyet";
        }
        return result;
    }console.log(annee(1993));       // résutat attendu:  "prime exceptionel"


const d = new Date();
console.log (d);
function age(b) {
   let r;
   if (b > 18) {
     r = "cool";
   } else {
     r = "gamin";
   }
   return r;
}
console.log(age(17))


const t = new Date();
console.log (d);
function age(b) {
   let r;
   if (b > 18) {
     r = "cool";
   } else {
     r = "gamin";
   }
   return r;
}
console.log(age(28))
  
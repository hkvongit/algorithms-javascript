// var Ob = {
//     key1:"hai",
//     key2:"kaka"
// }

// Ob.key3="dishkavv"
// if(Ob.key4===undefined){
//     Ob.key4=0
// }
// console.log(Ob)

// stringOb = {}

// const StringCount = (str) =>{

// }
dummy = "haLle all".split(" ");
duppi = dummy.join("");
ary = Array.from(duppi);

// ob = {};
// const func = (ary,ob) => {
//   for (ele in ary) {
//       key = ary[ele]
//     if (ob[key] === undefined) {
//       ob[key] = 1;
//     } else {
//       ob[key] += 1;
//     }
//   }
// };
ob = {};
const func = (ary, ob) => {
  for (let ele in ary) {
    dummy = ary[ele];
    key = dummy.toLowerCase();
    if (/[a-z0-9]/.test(key)) {
        ob[key] ? ob[key]+=1 : ob[key]=1
    }
  }
};
func(ary, ob);
console.log(ob);

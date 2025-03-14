// let a=[1,2,3,4]
// let c=[6,7,8,]
// let b=[...a,...c]
// console.log('a',a)
// console.log('b',b)


// let a ={name:'manu'}
// let b={...a,age:20,name:'aswin'}
// console.log(a,b)


// let a=[1,2,3,4,5,6]
// let[b,c,...d]=a
// console.log(b);
// console.log(c);
// console.log(d);


let a={name:'manu',age:22,mark1:54,mark2:34}
let{age,name,...mark}=a
console.log(name);
console.log(age);
console.log(mark);



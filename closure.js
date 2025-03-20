// function outerfun(outervar){
//     return function innerfun(bcd){
//         console.log(outervar)
//         console.log(bcd);
        
//     }
// }
// let a=outerfun(10)
// console.log(a);
// a(100)



// forEach

// const a=[1,2,3,4,5,6]
// a.forEach((item)=>console.log(item))

//map

// const a=[1,2,3,4,5,6]
// const data=a.map((item)=>item*10)
// console.log(data);

//filter

//eg:1.odd or even
// const a=[1,2,3,4,5,6]
// const data=a.filter((item)=>item % 2 ==0)
// console.log(data);

//eg:2.string
// const data=['abc','hello','asd']
// const result=data.filter((item)=>item[0]=='a')
// console.log(result);

//callback

// function data(a,b,callback){
//     const c=a+b
//     callback(c)
// }
// function display(c){
//     console.log(c);
    
// }
// data(10,2,display)


//reduce

// const a=[1,2,3,4,5,6]
// const res=a.reduce((data,item)=>data+item)
// console.log(res)


//find

// const a=[1,2,3,4,5,6]
// const data=a.find((item)=>item>4)
// console.log(data);


//this

// const data={
//     fname:"Anu",
//     lname:"mol",
//     fullname:function(){
//         console.log(this.fname,this.lname);
        
//     }
// }
// console.log(data);
// data.fullname()

//call

// const nameobj={
//     fname:"anil",
//     age:20
// }
// const data={
//     fname:"Anu",
//     lname:"mol",
//     fullname:function(){
//         console.log(this.fname);
        
//     }
// }
// console.log(data);
// data.fullname.call(nameobj)


//bind

// const nameobj={
//     fname:"anil",
//     age:20
// }
// const data={
//     faname:"Anu",
//     lname:"mol",
//     fullname:function(age){
//         console.log(this.fname,age);
        
//     }
// }
// console.log(data);
// const d1=data.fullname.bind(nameobj,45)
// d1()


//apply
// const person={
//     name:"John"
// }
// function data(job,com){
//     console.log(job,com,this.name);
    
// }
// data.apply(person,["Developer","Google"])



//oop
//  class synnefo{
//     constructor(){
//         this.a=10
//         console.log("register");
        
//     }
//     python(){
//         console.log("python");
        
//     }
//     mern(){
//         console.log("mern");
        
//     }
//  }
//  manu=new synnefo()
//  manu.python()
//  manu.mern()
//  console.log(manu);
 

//inheritance

//classical inheritance
// class synnefo{
//     constructor(){
//         this.a=10
//         console.log("register");
        
//     }
//     python(){
//         console.log("python");
        
//     }
//     mern(){
//         console.log("mern");
        
//     }
// }
// class Novavi extends synnefo{
//     constructor(){
//         console.log("novavi registration");
//         super()
        
//     }
//     dev(){
//         console.log("dev");
        
//     }
// }
// manu=new synnefo()
// manu.python()
// manu.mern()
// console.log(manu);

// staff=new Novavi();
// staff.dev();

//prototypal inheritance

// const data={
//     greet:function(){
//         console.log('welcome to all');
        
//     }
// }
// a1=Object.create(data)
// a1.greet()
// console.log(a1);


//exception handling

//try,catch,finally,throw

// try{
//     console.log(a);
    
// }
// catch(error){
//     console.log('error',error.message);
    
// }
// finally{
//     console.log('prgm ends');
    
// }


//throw
// try{
//     const a=parseInt('abc')
//     if(isNaN(a)){
//         throw new Error('a is not a number')
//     }
// }
// catch(error){
//     console.log('error',error.message);
    
// }
// finally{
//     console.log('pgm ends');
    
// }
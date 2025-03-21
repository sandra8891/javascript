//callback

// function Todo(task,callback){
//     console.log('starting',task);
//     setTimeout(()=>{
//         console.log('ending',task);
//         callback()
        
//     },1000)
    
// }
// Todo("task1",()=>console.log('task1 completed'))


//callback hell

// function step1(callback){
//     setTimeout(()=>{
//         console.log('step1 completed');
//         callback()
        
//     },1000)
// }
// function step2(callback){
//     setTimeout(()=>{
//         console.log('step2 completed');
//         callback()
        
//     },1000)
// }
// function step3(callback){
//     setTimeout(()=>{
//         console.log('step3 completed');
//         callback()
        
//     },1000)
// }
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log('all steps completed');
            
//         })
//     })
// })


//promise

// function step1(callback){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step1 completed');
//             resolve()          
//         },1000)
//     })
// }
// function step2(callback){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step2 completed');
//             resolve()          
//         },1000)
//     })
// }
// function step3(callback){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log('step3 completed');
//             resolve()          
//         },1000)
//     })
// }
// step1()
// .then(step2)
// .then(step3)
// .then(()=>{
//     console.log("all steps completed");
    
// })

// const data=new Promise((resolve,reject)=>{
//     if(true){
//         resolve('resolved')
//     }else{
//         reject('rejected')
//     }
// })
// console.log(data);
// data.then((message)=>{
//     console.log(message);
    
// }).catch((message)=>{
//     console.group(message)
// }).finally(()=>{
//     console.log('finally');
    
// })



//api get cheyan

// async function fetData() {
//     try{
//         const response=await fetch("https://dummyjson.com/quotes")
//         const products=await response.json()
//         console.log('products',products);
        
//     }catch(error){

//     }
// }
// fetData()


//html page display cheyan

// async function fetData() {
//     try{
//         const response=await fetch("https://dummyjson.com/products")
//         const products=await response.json()


//         const data=products.products
//         const div=document.querySelector(".div")

//         data.forEach(item => {
//             console.log(item.title);
//             const h1=document.createElement("h1")
//             h1.innerHTML=item.title
//             div.appendChild(h1)
//         })
//     }catch(error){

//     }
    
// }
// fetData()



async function fetData() {
        try{
            const response=await fetch("https://dummyjson.com/products")
            const products=await response.json()
    
    
            const data=products.products
            const div=document.querySelector(".div")
    
            data.forEach(item => {
                console.log(item);
                div.innerHTML+=`
            <div class="col-lg-4">
                <div class="card" style="width:100%">
                     <img class="card-img-top" src="${item.thumbnail}" alt="Card image" style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                         <a href="#" class="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>


        `
                
                
            })
        }catch(error){
    
        }
        
    }
    fetData()
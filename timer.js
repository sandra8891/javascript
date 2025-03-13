const p=document.querySelector('p')
let a=120
const x=setInterval(()=>{
    a--
    const c=a/60|0
    const d= a % 60;
    const time = `${c}:${d.toString().padStart(2, '0')}`
    p.textContent=time
        if(a===0){
            clearInterval(x)
        }
        
    },1000);
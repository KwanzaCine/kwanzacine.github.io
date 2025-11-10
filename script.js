document.querySelector(".intro").style.opacity=0;
setTimeout(()=>{
document.querySelector(".intro").style.opacity=1;

const divs2=document.querySelectorAll(".appear");
divs2.forEach(div=>{
    
div.style.display="inline-block";
});

/*setTimeout(()=>{
const divs=document.querySelectorAll(".appear");
divs.forEach(div=>{
    div.classList.add("appear-visible");
});

//document.querySelector(".intro").classList.add("movs");
},1500);

},1500);
*/

/*
var vv=0;
document.querySelector(".more").addEventListener("click",()=>{
if(vv==0){
    document.querySelector(".menu").style.width="220px";
document.querySelector(".menu").style.opacity="1";
document.querySelector(".headers").style.position="absolute";
vv=1;
window.location.href="#headers";
}else{
    document.querySelector(".menu").style.width="0%";
document.querySelector(".menu").style.opacity="0";
document.querySelector(".headers").style.position="fixed";
vv=0;
}
});
*/
var vv=0;
document.querySelector(".more").addEventListener("click",()=>{
if(vv==0){
    document.querySelector(".menu").style.width="220px";
document.querySelector(".menu").style.display="flex";
document.querySelector(".headers").style.position="absolute";
vv=1;
window.location.href="#headers";
}else{
    document.querySelector(".menu").style.width="0%";
document.querySelector(".menu").style.display="none";
document.querySelector(".headers").style.position="fixed";
vv=0;
}
});




function isInView(elemnto){
const rect = elemnto.getBoundingClientRect();
return (rect.bottom > 0 && rect.top < (window.innerHeight - 150 ));
}

divs=document.querySelectorAll(".fader");

document.addEventListener("scroll",()=>{
divs.forEach(div => {
    if(isInView(div)){
        div.classList.add("fader-visible");
    }else{
        div.classList.remove("fader-visible");
    }
});
});


});




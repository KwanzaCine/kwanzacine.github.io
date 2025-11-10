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



const searchInput=document.querySelector("#search");

searchInput.addEventListener("input",function (){
const inputText = this.value.toLowerCase().trim();
const keywords = inputText.split(/\s+/);

const pgms=document.querySelectorAll(".helpDIV");

pgms.forEach(pgm => {

const span=pgm.querySelector("span")?.textContent.toLocaleLowerCase() || '';


const content = span;
const foundall = keywords.every(palavra => content.includes(palavra));
if(foundall || inputText === ''){
    pgm.classList.add("vis");
    pgm.classList.remove("invs");
}else{
    pgm.classList.add("invs");
    pgm.classList.remove("vis");
}

});


});

function isInView(elemnto){
const rect = elemnto.getBoundingClientRect();
return (rect.bottom > 0 && rect.top < (window.innerHeight - 20 ));
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




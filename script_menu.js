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


/*
var vv=0;
document.querySelector(".more").addEventListener("click",()=>{
if(vv==0){
    document.querySelector(".menu").style.display="flex";
    document.querySelector(".headers").style.position="absolute";
    window.location.href="#headers";
    
vv=1;
}else{
    document.querySelector(".menu").style.display="none";
    document.querySelector(".headers").style.position="fixed";
    vv=0;
}});


*/
function only_show(id){
    try{
        if(document.getElementById(id)){
let every_div=document.querySelectorAll(".pgm");
every_div.forEach( div =>{
    div.style.display="none";
});

document.getElementById(id).style.display="block";
return true;       
}else{
            alert("Nenhuma mídia encontrada");
            return false;
        } 
}catch(e){
        
    }
}


const searchInput = document.querySelector("#search");
const params=new URLSearchParams(window.location.search);

try{
    
const searchParam=params.get("search");
searchInput.value=searchParam;

const inputText = searchInput.value.toLowerCase().trim();
const keywords = inputText.split(/\s+/);

const pgms=document.querySelectorAll(".pgm");

pgms.forEach(pgm => {

const txtP=pgm.querySelector("p")?.textContent.toLocaleLowerCase() || '';
const alts=pgm.querySelector("img")?.alt.toLowerCase() || '';

const content = txtP + '' + alts;
const foundall = keywords.every(palavra => content.includes(palavra));
if(foundall || inputText === ''){
    pgm.style.display="inline-block";
}else{
    pgm.style.display="none";
}

});
}catch(e){
    console.log(e);
};

if(params.get("media")){
    
    movie=params.get("media");
  
    if(only_show(movie)){
        let mv=document.getElementById(movie);
        mv.querySelector(".less-info").style.display="none";
        mv.style.border="0px";
        mv.querySelector(".more-info").style.display="block";
    }
}





var vf=0
function campoSearch(){
    if(vf==0){
        
        document.querySelector(".searchBar").style.transform="translateY(0)";
        document.querySelector(".searchBar").style.display="inline-block";
        vf=1;
    }else{
        document.querySelector(".searchBar").style.display="none";
        document.querySelector("#search").value="";
        document.querySelector(".searchBar").style.transform="translateY(-10px)";
        let pgm_s=document.querySelectorAll(".pgm");
        pgm_s.forEach(pgm=>{
            pgm.style.display="inline-block";
        });
        vf=0;
    }
}
/*
var vv=0;
document.querySelector(".more").addEventListener("click",()=>{
if(vv==0){
    document.querySelector(".menu").style.width="220px";
document.querySelector(".menu").style.opacity="1";
document.querySelector(".headers").style.position="absolute";
window.location.href="#headers";
vv=1;
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



searchInput.addEventListener("input",function (){
const inputText = this.value.toLowerCase().trim();
const keywords = inputText.split(/\s+/);

const pgms=document.querySelectorAll(".pgm");

pgms.forEach(pgm => {

const txtP=pgm.querySelector("p")?.textContent.toLocaleLowerCase() || '';
const alts=pgm.querySelector("img")?.alt.toLowerCase() || '';

const content = txtP + '' + alts;
const foundall = keywords.every(palavra => content.includes(palavra));
if(foundall || inputText === ''){
    pgm.style.display="inline-block";
}else{
    pgm.style.display="none";
}

});

});

const pgms2=document.querySelectorAll(".pgm");
pgms2.forEach(pgm2=>{
    pgm2.addEventListener("click",function (){
    pgm2.querySelector(".less-info").style.display="none";
    pgm2.querySelector(".more-info").style.display="block";
    window.location.href="#headers";
    document.querySelector("#solic").style.display="none";
pgms2.forEach(pgm3=>{
if(pgm3.id!=pgm2.id){
    pgm3.style.display="none";
}
});

    });
});

const posters=document.querySelectorAll(".ocult");
posters.forEach(poster=>{

poster.addEventListener("click", function (){

/*   
poster.parentElement.parentElement.querySelector(".less-info").style.display="block";
    poster.parentElement.parentElement.querySelector(".more-info").style.display="none";
console.log(poster.parentElement.parentElement);
*/
location.reload();
//}

});


});

const evPoster=document.querySelectorAll(".poster");

evPoster.forEach(post=>{
if(post.parentElement.className=="more-info"){
    let poster=post.parentElement.parentElement.querySelector(".less-info").querySelector(".poster");
post.src=poster.src;
}
});
const pgmTitles=document.querySelectorAll(".pgmTitle");

pgmTitles.forEach(post=>{
if(post.parentElement.className=="less-info"){
    let poster=post.parentElement.parentElement.querySelector(".more-info").querySelector(".pgmTitle");
    if(poster.innerText.length >= 14){
post.innerText=poster.innerText.slice(0,14)+"...";
    }
}

});

const talk=document.querySelectorAll(".talk-to-us");

talk.forEach(link=>{
link.addEventListener("click",async function (){
let titulo=this.parentElement.querySelector(".pgmTitle");
let prec=this.parentElement.querySelector(".price").innerText;
let encT=encodeURIComponent(titulo.innerText);
link.target="_blank";
link.href="https://wa.me/926077400?text="+encodeURIComponent("Ola, gostaria de comprar: ")+ encT;
let msg={
    content: "=======\n**[-> 💸__Possivel Venda__💸 <-]**\n\n\`🎥Nome:\` **"+titulo.innerText+"**\n\`💰Preço:\` **"+prec+"**\n\n||@everyone||\n======="
}
await fetch("https://discord.com/api/webhooks/1437780468433948763/3l6_rtpwsddJXgwYnfhf0OYjAEFIytdxeKppXkMze_sBUdoef9hJtFEP0pI6eGNwbgPJ",{
method:"POST",
headers: {"Content-Type":"application/json"},
body: JSON.stringify(msg)
});
});
});



const pCH=document.querySelectorAll(".catChooser p");
const filmP=pCH[0];
const seriesP=pCH[1];
const evTudo=pCH[2];
const animesP=pCH[3];
const doramas=pCH[4];

evTudo.addEventListener('click', function (){
const pgms=document.querySelectorAll(".pgm");
pgms.forEach(pgm=>{
pgm.style.display="inline-block";
this.style="text-decoration:underline";
animesP.style="text-decoration:none";
doramas.style="text-decoration:none";
seriesP.style="text-decoration:none";
filmP.style="text-decoration:none";
});
});

filmP.addEventListener("click", function(){
const pgms=document.querySelectorAll(".pgm");
pgms.forEach(pgm=>{
if(pgm.querySelector("span").innerText != "Categoria: Filme"){
    pgm.style.display="none";
}else{pgm.style.display="inline-block"}
});
this.style="text-decoration:underline";
evTudo.style="text-decoration:none";
animesP.style="text-decoration:none";
doramas.style="text-decoration:none";
seriesP.style="text-decoration:none";
});

seriesP.addEventListener("click", function(){
const pgms=document.querySelectorAll(".pgm");
pgms.forEach(pgm=>{
if(pgm.querySelector("span").innerText != "Categoria: Série"){
    pgm.style.display="none";
}else{pgm.style.display="inline-block"}
});
this.style="text-decoration:underline";
animesP.style="text-decoration:none";
filmP.style="text-decoration:none";
doramas.style="text-decoration:none";
evTudo.style="text-decoration:none";
});

animesP.addEventListener("click", function(){
const pgms=document.querySelectorAll(".pgm");
pgms.forEach(pgm=>{
if(pgm.querySelector("span").innerText != "Categoria: Anime"){
    pgm.style.display="none";
}else{pgm.style.display="inline-block"}
});
this.style="text-decoration:underline";
doramas.style="text-decoration:none";
filmP.style="text-decoration:none";
seriesP.style="text-decoration:none";
evTudo.style="text-decoration:none";
});

doramas.addEventListener("click", function(){
const pgms=document.querySelectorAll(".pgm");
pgms.forEach(pgm=>{
if(pgm.querySelector("span").innerText != "Categoria: Dorama"){
    pgm.style.display="none";
}else{pgm.style.display="inline-block"}
});
this.style="text-decoration:underline";
animesP.style="text-decoration:none";
filmP.style="text-decoration:none";
seriesP.style="text-decoration:none";
evTudo.style="text-decoration:none";
});

document.querySelector("#solic").href="https://wa.me/921257650?text="+encodeURIComponent("Olá, quero sugerir um filme.");




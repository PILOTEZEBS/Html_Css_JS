const oui=document.querySelector(".oui");
const non=document.querySelector(".non");
const quest=document.querySelector(".question");
oui.addEventListener("click",()=>{
   quest.classList.add("trans");
   quest.textContent= "quel est ta question???";  
});
non.addEventListener("click",()=>{
   quest.classList.add("trans");
   quest.textContent= "vous n avez aucune question!";  
});


const souris=document.querySelector("#souris");
window.addEventListener("mousemove",(e)=>{
      souris.style.left=e.pageX+"px";
      souris.style.top=e.pageY+"px";
});
window.addEventListener("mousedown",()=>{
   souris.style.transform="scale(2) translate(-25%, -25%)";
   souris.style.border="2px solid red";
});
window.addEventListener("mouseup",()=>{
   souris.style.transform="scale(1) translate(-50%, -50%)";
   souris.style.border="2px solid black";
});


const pere=document.querySelector("#pere");
pere.addEventListener("mouseenter",()=>{
   pere.style.opacity=".9";
});
pere.addEventListener("mouseout",()=>{
      pere.style.background="black";
      quest.textContent= "";
});

const son =(key)=>{
   const mix=new Audio();
   mix.src=key + ".mp3";
   mix.play();
};

const lettre=document.querySelector(".lettre");
document.addEventListener("keypress",(e)=>{
     lettre.textContent=e.key;
      if(e.key=="p"){
         mama.style.background="pink";
      }else{
         mama.style.background="royalblue"
      }
      if(e.key==="n"){
         son(e.key);
      }
      
});
const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{
   console.log(window.scrollY);
   if(window.scrollY>120){
      nav.style.top="0";
   }else{
      nav.style.top="-50px";
   };
}); 

const inputnom=document.querySelector(".innom");
const select=document.querySelector("select");
const form=document.querySelector("form");
let valueur="";
let langage="";

inputnom.addEventListener("input",(e)=>{
   valeur=e.target.value;
});
select.addEventListener("input",(e)=>{
   langage=e.target.value;
});

form.addEventListener("submit",(e)=>{
   e.preventDefault();
   if(cb.checked){
      document.querySelector("form > div").innerHTML="<h3>Nom:"+valeur+"</h3><h4>Langage:"+langage+"</h4>";
   }else{
      alert("veiller cocher pour accepter les regle");
   }
});



window.addEventListener("load", ()=>{
   console.log("document charger!");
});


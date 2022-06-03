const bouton=document.querySelectorAll(".btn");
const resul=document.querySelector("#resultat");

bouton.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        resul.textContent+=e.target.id;
    });
});

egal.addEventListener("click",()=>{
    resul.textContent=eval(resul.textContent);
});

effacer.addEventListener("click",()=>{
    resul.textContent="";
})
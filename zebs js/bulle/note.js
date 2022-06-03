const compteur=document.querySelector(".score");
let compt=0;

const bulleMaker=()=>{
    const bulle=document.createElement("span");
    bulle.classList.add("bulle");
    bulle.textContent="@Zebs_CODE";
    document.body.appendChild(bulle);
    
    const size=Math.random()*200+100+"px";
    bulle.style.height=size;
    bulle.style.width=size;
    
    bulle.style.top=Math.random()*100+50+"%";
    bulle.style.left=Math.random()*100+"%";
    const plusminus=Math.random() > 0.5 ? 1 : -1;
    bulle.style.setProperty("--left",Math.random()*100*plusminus+"%");

bulle.addEventListener("click",()=>{
    compt++;
    compteur.textContent=compt;
    bulle.remove();
})


    setTimeout(()=>{
        bulle.remove();
    }, 6000);
   
};


setInterval(bulleMaker,300);








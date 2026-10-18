"use strict";
(function(){
 const toggle=document.querySelector(".menu-toggle");
 const nav=document.getElementById("primary-nav");
 if(toggle&&nav){
   toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")!=="true";toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Fechar menu de navegação":"Abrir menu de navegação");nav.classList.toggle("is-open",open)});
   document.addEventListener("keydown",e=>{if(e.key==="Escape"){nav.classList.remove("is-open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Abrir menu de navegação")}});
 }
 const search=document.getElementById("project-search");
 const select=document.getElementById("area-filter");
 const count=document.getElementById("result-count");
 const clear=document.getElementById("clear-filters");
 const empty=document.getElementById("empty-projects");
 if(!search||!select)return;
 const cards=Array.from(document.querySelectorAll("#project-list .project-card"));
 const choices=new Set(["todos",...Array.from(select.options).map(o=>o.value)]);
 const initial=new URLSearchParams(location.search).get("area")||"todos";
 if(choices.has(initial))select.value=initial;
 function render(){const q=search.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();let visible=0;
 cards.forEach(card=>{const text=(card.dataset.text||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"");const match=(select.value==="todos"||card.dataset.area===select.value)&&text.includes(q);card.hidden=!match;if(match)visible++});
 count.textContent=visible+" "+(visible===1?"projeto encontrado":"projetos encontrados");empty.hidden=visible!==0;
 }
 search.addEventListener("input",render);select.addEventListener("change",render);
 clear.addEventListener("click",()=>{search.value="";select.value="todos";render();search.focus()});render();
})();

const btn=document.getElementById('menu-btn')
const menu=document.getElementById('menu-links')

let vuelta=true


btn.addEventListener('click',(btn)=>{
    if(vuelta){
        menu.classList.replace('menu-ocultar','menu-mostrar')
        vuelta=false
    }
    else{
        menu.classList.replace('menu-mostrar','menu-ocultar')
        vuelta=true
    }
})
const btn=document.querySelector('#header-btn')
const tema=document.querySelector('#cambio-tema')
const separador=document.querySelector('#svg-separador')
const icono_btn=document.querySelector('#icono-tema')

let vuelta=true

btn.addEventListener('click',()=>{

    // const datos_btn=icono_btn.className.split(' ')

    if(vuelta){
        tema.setAttribute('href','temas/tema-white.css')
        separador.setAttribute('fill','#fff')
        vuelta=false

        icono_btn.classList.replace('fa-toggle-off','fa-toggle-on')

    }
    else{
        vuelta=true
        tema.setAttribute('href','temas/tema-black.css')
        separador.setAttribute('fill','#000')
        icono_btn.classList.replace('fa-toggle-on','fa-toggle-off')
    }
})
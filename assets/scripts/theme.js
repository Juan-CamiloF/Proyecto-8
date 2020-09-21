
const theme = document.getElementById('theme')

theme.className = 'theme '+localStorage.getItem('theme')

const btnOscuro = document.getElementById('oscuro')
btnOscuro.addEventListener('click',()=>{
    local= theme.className='theme uno'
    localStorage.setItem('theme','uno')
})
const btnClaro = document.getElementById('claro')
btnClaro.addEventListener('click',()=>{
    theme.className='theme'
    localStorage.setItem('theme','cero')
})
const btnRetro = document.getElementById('retro')
btnRetro.addEventListener('click',()=>{
    theme.className='theme dos'
    localStorage.setItem('theme','dos')
})



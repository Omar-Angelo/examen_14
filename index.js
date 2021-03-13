const elimiar1 = document.querySelectorAll('#eliminar1')
const mensajeeli = document.querySelector('#avisoeliminado')
const editar = document.querySelectorAll('#editar')
const editar2 = document.querySelectorAll('#editar2')
const editar3 = document.querySelectorAll('#editar3')
const editar4 = document.querySelectorAll('#editar4')
const editar5 = document.querySelectorAll('#editar5')
const editar6 = document.querySelectorAll('#editar6')
const editar7 = document.querySelectorAll('#editar7')
const editar8 = document.querySelectorAll('#editar8')

const videohijo= document.querySelector('.video-hijo')


const cancelar = document.querySelectorAll('#cancelar')

const menModi = document.querySelector('.modificar')
const menModi2 = document.querySelector('.modificar2')
const menModi3 = document.querySelector('.modificar3')
const menModi4 = document.querySelector('.modificar4')
const menModi5 = document.querySelector('.modificar5')
const menModi6 = document.querySelector('.modificar6')
const menModi7 = document.querySelector('.modificar7')
const menModi8 = document.querySelector('.modificar8')

//modificar
const nombre1= document.querySelector('#nom1')
const parrafo1= document.querySelector('#pa1')

const nombre2= document.querySelector('#nom2')
const parrafo2= document.querySelector('#pa2')

const nombre3= document.querySelector('#nom3')
const parrafo3= document.querySelector('#pa3')

const nombre4= document.querySelector('#nom4')
const parrafo4= document.querySelector('#pa4')

const nombre5= document.querySelector('#nom5')
const parrafo5= document.querySelector('#pa5')

const nombre6= document.querySelector('#nom6')
const parrafo6= document.querySelector('#pa6')

const nombre7= document.querySelector('#nom7')
const parrafo7= document.querySelector('#pa7')

const nombre8= document.querySelector('#nom8')
const parrafo8= document.querySelector('#pa8')

editar8.forEach((e)=>{
  e.addEventListener('click',Modificando8)
})
function Modificando8(){
  menModi8.classList.toggle('mostar')
  const modificador8 = document.querySelector('#modi8')
  const  modificadorare8 = document.querySelector('#are8')

  nombre8.textContent=modificador8.value
  parrafo8.textContent=modificadorare8.value
}


editar6.forEach((e)=>{
  e.addEventListener('click',Modificando6)
})
function Modificando6(){
  menModi6.classList.toggle('mostar')
  const modificador6 = document.querySelector('#modi6')
  const  modificadorare6 = document.querySelector('#are6')

  nombre6.textContent=modificador6.value
  parrafo6.textContent=modificadorare6.value
}
editar7.forEach((e)=>{
  e.addEventListener('click',Modificando7)
})


function Modificando7(){
  menModi7.classList.toggle('mostar')
  const modificador7 = document.querySelector('#modi7')
  const  modificadorare7 = document.querySelector('#are7')

  nombre7.textContent=modificador7.value
  parrafo7.textContent=modificadorare7.value
}



editar5.forEach((e)=>{
  e.addEventListener('click',Modificando5)
})
function Modificando5(){
  menModi5.classList.toggle('mostar')
  const modificador5 = document.querySelector('#modi5')
  const  modificadorare5 = document.querySelector('#are5')

  nombre5.textContent=modificador5.value
  parrafo5.textContent=modificadorare5.value
}



editar4.forEach((e)=>{
  e.addEventListener('click',Modificando4)
})
function Modificando4(){
  menModi4.classList.toggle('mostar')
  const modificador4 = document.querySelector('#modi4')
  const  modificadorare4 = document.querySelector('#are4')

  nombre4.textContent=modificador4.value
  parrafo4.textContent=modificadorare4.value
}


editar3.forEach((e)=>{
  e.addEventListener('click',Modificando3)
})
function Modificando3(){
  menModi3.classList.toggle('mostar')
  const modificador3 = document.querySelector('#modi3')
  const  modificadorare3 = document.querySelector('#are3')

  nombre3.textContent=modificador3.value
  parrafo3.textContent=modificadorare3.value
}




editar2.forEach((e)=>{
  e.addEventListener('click',Modificando2)
})
function Modificando2(){
  menModi2.classList.toggle('mostar')
  const modificador2 = document.querySelector('#modi2')
  const  modificadorare2 = document.querySelector('#are2')

  nombre2.textContent=modificador2.value
  parrafo2.textContent=modificadorare2.value
}



editar.forEach((e)=>{
  e.addEventListener('click',Modificando)
})
function Modificando(){
  menModi.classList.toggle('mostar')
  const modificador1 = document.querySelector('#modi1')
  const  modificadorare1 = document.querySelector('#are1')

  nombre1.textContent=modificador1.value
  parrafo1.textContent=modificadorare1.value
}


cancelar.forEach((e)=>{
  e.addEventListener('click',canlecaElmen)
})
function canlecaElmen(){
    mensajeeli.classList.remove('mostar1')
}

elimiar1.forEach((e)=>{
     e.addEventListener('click', mostrarMenElimi)
})

function mostrarMenElimi(){
    mensajeeli.classList.add('mostar1')
}

eliminar2.addEventListener('click',eliminarHijo)
function eliminarHijo(){
     videohijo.remove()
     mensajeeli.classList.remove('mostar1')
}


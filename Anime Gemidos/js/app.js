const boton1 = document.getElementById('1');
boton1.addEventListener('click', gimiendo);

const boton2 = document.getElementById('2');
boton2.addEventListener('click', gimiendo);

const boton3 = document.getElementById('3');
boton3.addEventListener('click', gimiendo);

const boton4 = document.getElementById('4');
boton4.addEventListener('click', gimiendo);

const boton5 = document.getElementById('5');
boton5.addEventListener('click', gimiendo);




function gimiendo(e)
{
    console.log(e.target.id);
    const audio = document.querySelector(`audio[data-key="${e.target.id}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
   
}

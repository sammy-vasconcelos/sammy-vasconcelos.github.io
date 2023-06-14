const cat = document.querySelector('.cat');
const crystal = document.querySelector('.crystal');

const jump = () => {
    cat.classList.add('jump');
    setTimeout(() => {
        cat.classList.remove('jump');
    }, 500)
}


const loop = setInterval(() => {
    const crystalPosition = crystal.offsetLeft;
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px','');

    if(crystalPosition <= 120 && crystalPosition > 0 && catPosition < 100){
        crystal.style.animation = 'none';
        crystal.style.left = `${crystalPosition}px`;

        cat.style.animation = 'none';
        cat.style.bottom = `${catPosition}px`;

        
        cat.src = './assets/explosion.gif'  

        clearInterval(loop);
    }
},10)
document.addEventListener("keydown", jump);
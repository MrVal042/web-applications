const colors = ['red','blue','green','yellow','pink', 'purple','gold',
 'silver', 'white','indigo','indigo'];

const bg = document.getElementById('body');
const btn = document.querySelector('#btn');
const chColor = document.querySelector('.changedColor')


btn.addEventListener('click', ()=>{
    let color = colors[Math.floor(Math.random()*colors.length)]; 
    bg.style.backgroundColor = color;
    chColor.innerHTML = color;
  })

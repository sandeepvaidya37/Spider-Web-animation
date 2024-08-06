var baner = document.querySelector(".baner");
var canvas = document.getElementById('dot');


canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');

let dots = [];

let arrayColors = ['#eee', '#5C6C86', '#596d91', '#696959'];


for(let i =0; i<50; i++){
  dots.push({
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
    size: Math.random()* 3 + 5,
    color:arrayColors[Math.floor(Math.random()* 5)]
  });
}
const drawDots = () => {

  dots.forEach(dot => {
    ctx.fillStyle = dot.color;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2 );
    ctx.fill();
  })

}
drawDots();

baner.addEventListener('mousemove', (e)=>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDots();
      let mouse = {
        x: e.pageX - baner.getBoundingClientRect().left,
        y: e.pageY - baner.getBoundingClientRect().top,
      }

      dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 +(mouse.y -dot.y) ** 2);
        if(distance < 300){
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      })
});
baner.addEventListener('mouseout', (e)=>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDots();
})
// Add your image paths here
const list = [
    "images/img1.png",
    "images/img2.png",
    "images/img3.png",
    "images/img4.png",
    "images/img5.png",
    "images/img6.png",
    "images/img7.png",
    "images/img8.png",
    "images/img9.png",
    "images/img10.png",
    "images/img11.png",
    "images/img12.png",
    "images/img13.png",
  ];
  
  function sweets() {
    const h = document.createElement("img");
  
    
    h.src = list[Math.floor(Math.random() * list.length)];
    h.className = "sweets";
  
    
    h.style.left = Math.random() * 100 + "vw";
  
   
    const size = Math.random() * 40 + 40;
    h.style.width = size + "px";
  
    
    const duration = Math.random() * 3 + 4;
    h.style.animationDuration = duration + "s";
  
    document.body.appendChild(h);
  
   
    setTimeout(() => {
      h.remove();
    }, duration * 1000);
  }
  
  
  setInterval(sweets, 800);


  const petalsImg = "images/erabadu_petals.png";

function flowerPetal() {
  const p = document.createElement("img");

  p.src = petalsImg;
  p.className = "petals";

  
  p.style.left = Math.random() * 20 + "vw";
  p.style.top = "-40px";


  const size = Math.random() * 20 + 20;
  p.style.width = size + "px";

 
  const duration = Math.random() * 2 + 3;
  p.style.animationDuration = duration + "s";

  document.body.appendChild(p);

  setTimeout(() => p.remove(), duration * 1000);
}


setInterval(flowerPetal, 1800);
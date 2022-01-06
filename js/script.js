let img = document.querySelectorAll('.about_elements img')
let anims = ['anim_circles_one', 'anim_circles_two','anim_circles_three','anim_circles_four']

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}

let randA = (max) => {
    return Math.floor(Math.random() * max)
}

img.forEach(item => {
    const x = randomInteger(200, -200);
    var y = randomInteger(50, -430);
    item.style.transform = `translate(${x}px,${y}px)`;
    let RA = randA(4);
    item.classList.add(`${anims[RA]}`)
    
    
    
})
     


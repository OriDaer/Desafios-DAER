let x,y=400;//variables para las posiciones en los ejes
function setup() {
  createCanvas(x, y);//creo el area de dibujo
  background(220);//pinto el canvas
  for(  let d=1000; d > 15; ellipse(x/2,y/2,d,d)){//cree una variable a la cual luego le puse un condicion y si esa condicion se cumplia q hiciera un circulo y se ejecute
    fill(random(211),random(211),random(211));//el circulo se pinta en cada iteracion de colores distintos en la posiciones rgb
    d=d-10;//a medida q se repite el for d va a valer 10 menos que el valor que tenia
  }//1ero va a hacer un circulo grande y a medida que se repita el for a la d(dist de radio que tiene el circulo) va a ir disminuyendo en un valor de 20
}
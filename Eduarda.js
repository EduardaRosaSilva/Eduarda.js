//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//raquete
let xRaquete = 7;
let yRaquete = 7;
let larguraRaquete = 10;
let alturaRaquete = 100;

let colidiu = false;
//raquete do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 30;

// pontuacao
let meusPontos = 0;
let pontosdoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("green");
  mostraBolinha();
  movimentoBolinha();
  VerificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaMouse();
  colisaoMinhaRaquete();
  mostraRaqueteOponente();
  MovimentaRaqueteOponente();
  ColisaoRaqueteOponente();
  incluirPlacar();
  marcaPonto();
  movimentaRaqueteOponente();  
  MovimentaMinharaquete();
}
function mostraBolinha() {
  fill("blue");
  stroke('black');
  circle(xBolinha, yBolinha, diametro);
}
function movimentoBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function VerificaColisaoBorda() {
  if (xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha > height || yBolinha < 0) {
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete() {
  fill("purple");
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
function MovimentaMinhaRaquete(){ //automatico
  velocidadeyRaquete = yBolinha -yRaquete -alturaRaquete/2;
}

function movimentaMinhaRaquete() {
  if (keyIsDown(38)){
    yRaquete -= 10;
  }
  if (keyIsDown(40)){
    yRaquete += 10;
  }
}
function movimentaMouse() {
  if (mouseIsPressed) {
    yRaquete = mouseY;
  }
}
function colisaoMinhaRaquete() {
  colidiu = collideRectCircle(
    xRaquete, yRaquete, larguraRaquete ,alturaRaquete,xBolinha, yBolinha,Diametro);
  if (colidiu) {
    VelocidadexBolinha *= -1;
  }
}
function mostraRaqueteOponente() {
  fill("red");
  rect(xRaqueteOponente,yRaqueteOponente,larguraRaquete,
alturaRaquete);
}
function movimentaRaqueteOponente(){ //W e S
  if(keyIsDown(87)){
    yRaqueteOponete -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}
function MovimentaRaqueteOponente() { //automatico
  velocidadeYOponente = 
    yBolinha - yRaqueteOponente - alturaRaquete / 2;
  yRaqueteOponente += velocidadeYOponente;}

function ColisaoRaqueteOponente(){
  colidiu = collideRectCircle(
  xRaqueteOponente,yRaqueteOponente,larguraRaquete, alturaRaquete,xBolinha,yBolinha,Diametro);
  if (colidiu){
    VelocidadexBolinha *= -1
  }
}
function incluirPlacar(){
  str(255)
  fill(color(255,14,0));
  rect(183,11,40,20);
  fill(255);
  
  text(meusPontos,200,26);
  fill(color(255,140,0));
  rect(383,11,40,20);
  fill(255);
  text(pontosdoOponente,400,26);
}
function marcaPonto(){
  if(xBolinha > 600){
    meusPontos += 1;
  }
  if(xBolinha < 0){
    pontosdoOponente += 1;
  }
}

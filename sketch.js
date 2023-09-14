let bullets = []
let bulletnr = 0
let aliensLine1 = []
let aliensLine2 = []
let aliensLine3 = []
let aliensLine4 = []
let barricadeLine1 =[]

function preload(){
    ship_0 = loadImage("ressources/ship_0.png");
    ship_1 = loadImage("ressources/ship_1.png");
    ship_2 = loadImage("ressources/ship_2.png");
    alien_0 = loadImage("ressources/alien_0.png");
    alien_1 = loadImage("ressources/alien_1.png");
    skumfidus_0 = loadImage("ressources/skumfidus_0.png");
    skumfidus_1 = loadImage("ressources/skumfidus_1.png");
    Chunk_0 = loadImage("ressources/Chunk_0.png");
    Chunk_1 = loadImage("ressources/Chunk_1.png");
    Barricade_0 = loadImage("ressources/Barricade_0.png");
    Barricade_1 = loadImage("ressources/Barricade_1.png");
    Barricade_2 = loadImage("ressources/Barricade_2.png");
}

let ship
let ship_0, ship_1, ship_2

function setup() {
    
    createCanvas(1000, 600);
    background(0)
    ship = new Ship(width/2-10,height-100);
   
    ship.draw();

    for (let i=0; i<5; i++){
        aliensLine1[i]=new Alien(90+50*i,20)
        aliensLine2[i]=new Alien(90+50*i,70)
        aliensLine3[i]=new Skumfidus(90+50*i,120)
        aliensLine4[i]=new Chunk(90+50*i,170)
        
        barricadeLine1[i]=new Barricade(90+50*i,450)
    }
    

   // alien = new Alien(width/2-10,20)
  


	
}

function draw()
{
    background(0)
    ship.draw()
    //alien.draw()
    //alien.update()
    for (let i=0; i< bullets.length; i++){
        bullets[i].draw();
        bullets[i].update();
     //   print("before hasHit")
        bullets[i].hasHit(aliensLine1);
        bullets[i].hasHit(aliensLine2);
        bullets[i].hasHit(aliensLine3);
        bullets[i].hasHit(aliensLine4);

        bullets[i].hasHit(barricadeLine1);
      //  print(i)
       // print(bullets.length)
    //    print("after hashit")
     //  bullets[i].hasHit(aliensLine2);

    }
    for (let i=0;i<5;i++){
        aliensLine1[i].draw()
        aliensLine1[i].update()
        aliensLine2[i].draw()
        aliensLine2[i].update()
        aliensLine3[i].draw()
        aliensLine3[i].update()
        aliensLine4[i].draw()
        aliensLine4[i].update()

        barricadeLine1[i].draw()
        barricadeLine1[i].update()
    }
    //print("locationStage "aliensLine1[2].locationStage)
    //print(aliensLine1[2].x)
    //print(aliensLine1[2].y)
    //print(aliensLine1[2].dx)
    //print(aliensLine1[2])
    if (aliensLine1[0].y > height) 
        noLoop()
}

class Alien{
    constructor(x,y){
        this.x = x
        this.y = y
        this.alienStage=0;
        this.changeStage = 0;
        this.alive = true;
        this.locationStage = 0
        this.diff_locationStage = 1
        this.dx = 2
       
    }

    draw(){
        if (this.alive) {
            if (this.alienStage == 0){
                image(alien_0,this.x,this.y);         
            }
            else {
                image(alien_1,this.x,this.y);
            // this.changeStage++            
            }           
            if (this.changeStage==0){
                this.alienStage++;
                if (this.alienStage > 1)
                    this.alienStage = 0
           }
            this.changeStage++
            if (this.changeStage >5)
                this.changeStage = 0

        }

        
   
    }
    update(){
        if (this.locationStage == 2016 ) {
            this.y+=3
            this.dx = -this.dx
            this.locationStage++
        }
        else if(this.locationStage== 330){
            this.y+=3
            this.dx = -this.dx
            this.locationStage = -15    

        }
        else {

        this.x += this.dx
        this.locationStage++
        }

    }

    



}

class Skumfidus{
    constructor(x,y){
        this.x = x
        this.y = y
        this.skumfidusStage=0;
        this.changeStage = 0;
        this.alive = true;
        this.locationStage = 0
        this.diff_locationStage = 1
        this.dx = 2
       
    }

    draw(){
        if (this.alive) {
            if (this.skumfidusStage == 0){
                image(skumfidus_0,this.x,this.y);         
            }
            else {
                image(skumfidus_1,this.x,this.y);
            // this.changeStage++            
            }           
            if (this.changeStage==0){
                this.skumfidusStage++;
                if (this.skumfidusStage > 1)
                    this.skumfidusStage = 0
           }
            this.changeStage++
            if (this.changeStage >5)
                this.changeStage = 0

        }

        
   
    }
    update(){
        if (this.locationStage == 2016 ) {
            this.y+=3
            this.dx = -this.dx
            this.locationStage++
        }
        else if(this.locationStage== 330){
            this.y+=3
            this.dx = -this.dx
            this.locationStage = -15    

        }
        else {

        this.x += this.dx
        this.locationStage++
        }

    }

    



}

class Chunk{
    constructor(x,y){
        this.x = x
        this.y = y
        this.chunkStage=0;
        this.changeStage = 0;
        this.alive = true;
        this.locationStage = 0
        this.diff_locationStage = 1
        this.dx = 2
       
    }

    draw(){
        if (this.alive) {
            if (this.chunkStage == 0){
                image(Chunk_0,this.x,this.y);         
            }
            else{
                image(Chunk_1,this.x,this.y);
            // this.changeStage++            
            }    
        
            if (this.changeStage==0){
                this.chunkStage++;
                if (this.chunkStage > 1)
                    this.chunkStage = 0
           }
            this.changeStage++
            if (this.changeStage >5)
                this.changeStage = 0

        }

        
   
    }
    update(){
        if (this.locationStage == 2016 ) {
            this.y+=3
            this.dx = -this.dx
            this.locationStage++
        }
        else if(this.locationStage== 330){
            this.y+=3
            this.dx = -this.dx
            this.locationStage = -15    

        }
        else {

        this.x += this.dx
        this.locationStage++
        }

    }

    



}

class Barricade{
    constructor(x,y){
        this.x = x
        this.y = y
        this.barricadeStage=0;
        this.changeStage = 0;
        this.alive = true;
        this.locationStage = 0
        this.diff_locationStage = 1
        this.dx = 2
    }

    draw(){
        if (this.alive) {
            image(Barricade_0,this.x,this.y);
            // if bullet has hit, change image
        }

        
    }
}

function keyPressed() {
   if (keyCode === 32) {
        ship.fire()
    }

}


class Ship{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.shipStage=0;
        this.changeStage = 0;
    }

    move(){
        if (keyIsDown(LEFT_ARROW)){
            this.x-=5;
        }
        if (keyIsDown(RIGHT_ARROW)){
            this.x+=5;
        }
        


    }
    

    draw(){
        this.move()
        if (this.shipStage == 0){
            image(ship_0,this.x,this.y);
           // this.changeStage++
        }
        else if (this.shipStage == 1){
            image(ship_1,this.x,this.y);
           // this.changeStage++
        }
        else {
            image(ship_2,this.x,this.y);
            
        }

        
        if (this.changeStage==0){
            this.shipStage++;
            if (this.shipStage > 2)
                this.shipStage = 0

            
        
            
        }
        this.changeStage++
        if (this.changeStage >5)
            this.changeStage = 0
      
        



       

    }

    fire(){
        bullets[bulletnr]= new Bullet(this.x+22,this.y)
        bulletnr++;
      //  print(bulletnr)
      //  print(bullets)
    }
}

class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.hasNotHit = true;
        
    }

    draw(){
        if(this.hasNotHit){
            fill(255, 255, 255)
            circle(this.x,this.y,7)
        }
    }

    update(){
        //Bullets skal flytte sig to op ad gangen. Ellers er den for langsom
        this.y-=2
    }

    hasHit(aliens){
        for (let i=0;i<aliens.length;i++){
            if (aliens[i].alive && this.hasNotHit){
                if (this.x > (aliens[i].x)-3 && this.x < (aliens[i].x)+27
                    && this.y > (aliens[i].y)-3 && this.y < (aliens[i].y)+27){
                   // print("true")
                    aliens[i].alive = false;
                    this.hasNotHit = false;
                }
            }
        }
    }

hasHit(Barricade){
        for (let i=0;i<Barricade.length;i++){
            if (Barricade[i].alive && this.hasNotHit){
                if (this.x > (Barricade[i].x)-3 && this.x < (Barricade[i].x)+27
                    && this.y > (Barricade[i].y)-3 && this.y < (Barricade[i].y)+27){
                   // print("true")
                    Barricade[i].alive = false;
                    this.hasNotHit = false;
                }
            }
        }
    }

}










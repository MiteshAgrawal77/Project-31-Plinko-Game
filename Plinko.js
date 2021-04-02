class Plinko{
      
      constructor(x,y,r,options){
        var options = {
            density:1,
            isStatic: true,
            restitution:0.8,
            friction:1
          }
          this.body = Bodies.circle(x,y,r,options)
          World.add(myworld, this.body) 
          this.w = w
          this.r=10

        }

        display(){

          var pos = this.body.position;
          var angle = this.body.angle;
  
          push()
          translate[pos.x,pos.y];
          rotate[angle];
          noStroke();
          fill(this.color)
          ellipseMode(RADIUS);
          ellipse(0,0,this.r,this.r);
          pop()
      }

    }
 
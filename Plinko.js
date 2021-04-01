class Plinko{
    constructor(x,y,r,options){
        var options = {
            density:1,
            isStatic: true,
            restitution:0.8,
            friction:1
          }
          this.body = Bodies.circle(x,y,this.r,options)
          World.add(myworld, this.body) 
          this.w = w
          this.r=10

        }
    }
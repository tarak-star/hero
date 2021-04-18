class Hero {
  constructor(x,y, width, height)
	{
		var options = { 
			density: 1,  
			frictionAir: 1
		};
		this.x=x;
		this.y=y;
		
		this.image=loadImage("superhero1.png");
		this.body=Bodies.rectangle(x,y,width,height,options);
		this.width = width;
        this.height = height;
		World.add(world, this.body);

	}
	
	display()
	{
			
			var Pos=this.body.position;		
			push()
			translate(Pos.x,Pos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.width,this.height)
			pop()
			
	}
}

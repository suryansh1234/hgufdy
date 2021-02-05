class Form{
constructor(){
    this.input=createInput("name");
    this.button=createButton("submit");
    this.greeting=createElement("h2");
    this.title=createElement("h1")
}
  

display(){
    this.title.html("mythpadd car");
    this.title.position(displayWidth/2-50,20)
    this.input.position(displayWidth/2-40,displayHeight/2-80)
    this.button.position(displayWidth/2+30,displayHeight/2)
     
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name=this.input.value()
        this.greeting.html(" welcome to the game and check the rules be ready to play with others "+player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4)





    })
}


}
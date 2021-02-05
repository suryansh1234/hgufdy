class Player{
constructor(){
this.name=null;
this.index=null;
this.distance=0;

}
getCount(){
    db.ref('playerCount').on("value",function(data){
        pc=data.val()

    })


}






















}
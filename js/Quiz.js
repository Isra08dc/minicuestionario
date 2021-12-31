class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    question.hide();
    //escribe aquí el código para cambiar el color de fondo 
    background("26a699")
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    text("Resultado del cuestionario",425,100)
    textSize(200)
    //llama aquí a getContestantInfo( )
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers=250;
      fill("Blue");
      textSize(20);
      text("*Nota: ¡El concursante que respodió correctamente, está resaltado en color verde!",130,230);
    }
    //escribe el código para resaltar al concursante que respondió correctamente
for(var plr in allContestants){
  var correctAns = "2";
  if (correctAns === allContestants[plr].answer)
  fill("Green")
  else 
  fill("red");
  display_Answers+=30;
  textSize(20);
  text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_Answers);
}
  }

}

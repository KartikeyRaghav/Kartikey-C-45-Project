class Player {
  constructor(){
    this.index = null;
    this.name = null;
    this.mail = null;
    this.feedback = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      mail:this.mail
    });
  }

  updateFeedback() {
    var playerIndex1 = "players/player" + this.index;
    database.ref(playerIndex1).set({
      name:this.name,
      mail:this.mail,
      feedback:this.feedback
    });
  }

  updateClick(time,result1,result2,result3) {
    var playerIndex1 = "players/player" + this.index;
    database.ref(playerIndex1).set({
      name:this.name,
      mail:this.mail,
      feedback:this.feedback,
      click:{
        number:time,
        result:{
          Player1Won: result1,
          Player2Won: result2,
          Draw: result3
        }
      }
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}

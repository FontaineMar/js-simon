$("button").click(function(){
  var numberComputer = [];
  var numberPlayer = [];
  for ( var i = 0; i < 5; i++) {
    listNumRandom = numRandom(1,100)
    numberComputer.push (listNumRandom);
    console.log ( numberComputer )
  }
  $('#number').text('i numeri da ricordare sono: ' + numberComputer)
  setTimeout(function(){
    $('#number').text('ricorda i numeri visti prima e inseriscili');
    var numberPlayer = [];
    for ( var i = 0; i < 5; i++){
      var input = parseInt(prompt('inserire il numero'))
      numberPlayer.push(input)
    }
    if(numberPlayer[input] !== numberComputer[listNumRandom]){
      $('#number').text('mi dispiace hai perso')
      $('#numbCom').text('i numeri casuali sono: ' + numberComputer);
      $('#numbPlay').text('i tuoi numeri sono: ' + numberPlayer);
    } else {
      $('#number').text('hai vinto bravo')
      $('#numbCom').text('i numeri casuali sono: ' + numberComputer);
      $('#numbPlay').text('i tuoi numeri sono: ' + numberPlayer);
    }
  },4000)
})

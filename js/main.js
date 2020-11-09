$(document).ready(function(){
  $("button").click(function(){
    var numberComputer = [];
    while (numberComputer.length < 5) {
      var listNumRandom = numRandom(1,30);
      if (!numberComputer.includes(listNumRandom)){
        numberComputer.push(listNumRandom);
        console.log(numberComputer)
      }
    }
    $('#number').text('i numeri da ricordare sono: ' + numberComputer.join(' '))
    setTimeout(function(){
      $('#number').text('ricorda i numeri visti prima e inseriscili');
      testArray(numberComputer)
      $('#numbCom').text('i numeri casuali sono: ' + numberComputer.join(' '));
    },4000)
  })
})

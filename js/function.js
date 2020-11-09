function numRandom(min, max){

  return  Math.floor(Math.random() * ((max + 1) - min) + min);
}

function testArray(checkArr){
  var userNumb = [];
  while( userNumb.length < 5 ){
    var input = parseInt(prompt('inserire il numero'))
    if(!userNumb.includes(input)){
      userNumb.push(input)
    } else {
      alert('non inserire lo stesso numero')
    }
  }
  for (var i = 0; i < userNumb.length; i++){
    if(userNumb[i] === checkArr[i] ){
      alert('numero indovinato')
    } else{
      alert('numero sbagliato')
    }
  }
  $('#numbPlay').text('i tuoi numeri sono: ' + userNumb.join(' '));

}

function msg(){
  var eventType = document.getElementById("eventType").value;
  var tempFahr =document.getElementById("tempFahr").value;
  var result;

//Kind of Event
  switch(eventType){
        case 'casual':
        result="something comfy";
      break;
        case 'semi-formal':
        result="a polo";
      break;
        case 'formal':
        result="a suit";
      break;
    default:
        result=""
  }

//The Temp
  if (tempFahr <54) {
    result=result +" and a coat";
  }else if (tempFahr <=70) {
        result=result +" and a jacket";
  }else if (tempFahr >70) {
        result=result +" and no jacket";
  }



    alert("Because you are going to a " +eventType+ " event and it is " +tempFahr+ " degrees out, then you should wear " +result+ ".");

}

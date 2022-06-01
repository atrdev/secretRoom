window.onmessage = (event) => {
   console.log(event);
    if (event.data) {
       let receivedData = event.data;
       console.log(event.data);
    }
  };
var myFunction = function(){
    console.log("myFunction")
}
console.log("TESTEEEEEEE")

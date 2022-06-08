
window.onload = function(){
   try_get_frame();
}

const try_get_frame = function(){
   let _frames = document.querySelectorAll('iframe');
   console.log("Try get");
   
   if(_frames.length ==0){
      setTimeout(()=>{try_get_frame()},1000);
   }else{
      console.log("Inject");
   
      _frames.forEach((_frame)=>{
         var cssLink = document.createElement("link");
         cssLink.href = "https://cdn.jsdelivr.net/gh/atrdev/secretRoom/main.css"; 
         cssLink.rel = "stylesheet"; 
         cssLink.type = "text/css"; 
         debugger;
         _frame.onload = function(){
            _frame.document.body.appendChild(cssLink);
         }
      });
   }
   
}

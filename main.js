window.onload = function(){
   try_get_frame();
}
const try_get_frame = function(){
   let _frames = document.querySelectorAll('iframe');
   if(frame.length ==0){
      setTimeout(try_get_frame,1000);
   }else{
      _frames.forEach((_frame)=>{
         var cssLink = document.createElement("link");
         cssLink.href = "https://cdn.jsdelivr.net/gh/atrdev/secretRoom/main.css"; 
         cssLink.rel = "stylesheet"; 
         cssLink.type = "text/css"; 
         _frame.document.head.appendChild(cssLink);
      });
   }
   
}

$(function() { 
  $.fn.msgtip = function(msgtext) { 
   var $this = $(this);    //当然响应事件对象 
   $this.append(msgtext);
  } 
}); 


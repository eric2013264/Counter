var count = 0;

$(document).ready(function() {
    $("#content").text(count)
  
    $(":button").click(function(){
       console.log("cleared")
       count = 0;
       $("#content").text(count);
       $("#timestamp").text(null);
       $(':button').css('display','none');
    });
   
    $(this).keydown(function(e) {
       e.preventDefault();
       count+=1;
       $("#content").text(count);
       $(':button').css('display','block');
       $(':button').css('text-align','center');
       $("#timestamp").text("Last Clicked: " + new Date().toLocaleString());
    });
    
    
});

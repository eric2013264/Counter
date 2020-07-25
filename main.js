var count = 0;

$(document).ready(function() {
    $("#content").text(count)
  
    $(":button").click(function(){
       console.log("cleared")
       count = 0;
       $("#content").text(count);
       $("#timestamp").text(null);
    });
   
    $(this).keydown(function(e) {
       e.preventDefault();
       count+=1;
       $("#content").text(count);
       $("#timestamp").text("Last Clicked: " + new Date().toLocaleString());
    });
});

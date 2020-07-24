var count = 0;

$("button#clear").click(function(){
  console.log("cleared")
  count = 0;
  $("#content").text(count);
});

$(this).keydown(function(e) {
   e.preventDefault();
   count+=1;
   $("#content").text(count);
   $("#timestamp").text(new Date().toLocaleString());
});

$(document).ready(function() {
    $("#content").text(count)
});


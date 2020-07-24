var count = 0;

$("button#clear").click(function(){
  count = 0;
  $("#content").text(count);
});

$(this).keydown(function(e) {
   e.preventDefault();
   count+=1;
   $("#content").text(count);
});

$(document).ready(function() {
    $("#content").text(count)
});


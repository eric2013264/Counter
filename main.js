var count = 0;

$("button#clear").click(function(){
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

$(document).ready(function() {
    $("#content").text(count)
});

document.getElementById("clear").addEventListener("click", function() {
  alert("hey");
});

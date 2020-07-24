
$(document).ready(function(){
  console.log("ready")
  $(document).keydown(function(e) {
    if (e.which == 13) {
        $('#content').val("Hey"); 
    }
  });
});


$(document).ready(function(){
  ($(document).click(function(){
    $('textarea#mytextarea').val(""); 
  });
  // Textarea keydown
  $("#mytextarea").keydown(function(e) {
    if (e.which == 13) {
        $('#content').val("Hey"); 
    }
  });
});


$(document).ready(function(){
  console.log("ready")
  $(this).keydown(function(e) {
    e.preventDefault()
    console.alert(e.which)
    
    if (e.which == 13) {
        $('#content').val("Hey"); 
    }
  });
});

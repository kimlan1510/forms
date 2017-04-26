$(document).ready(function() {
  $("#postcard").submit(function(event){
    var user_name = $("input#user-name").val();
    var user_address = $("input#user-address").val();
      
    $(".user-name").text(user_name);
    $(".user-address").text(user_address);

    $(".content").show();
    event.preventDefault();
  });

});

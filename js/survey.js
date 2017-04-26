$(document).ready(function(){
  // $("#button").click(function(){
    $("form#customer_info").submit(function(event){
      
      var customer_name = $("input#name").val();
      var customer_phone = $("input#phone_numbers").val();
      var dob = $("#born").val();
      var color = $("#color").val();
      var car = $("input:radio[name=car]:checked").val();
      var food = $("#favfood").val();

      $(".name").text(customer_name);
      $(".phone-numbers").text(customer_phone);
      $(".food").text(food);
      $(".car").text(car);
      $(".color").text(color);
      $(".summary").show();
      event.preventDefault();
    });
    // $(".form-group .radio .form-control").submit(function(event){
    //   event.preventDefault();
    //
    // });
  // });
});

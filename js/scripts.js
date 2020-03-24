$(document).ready(function() {
  $("#formOne").submit(function() {
    $(".person1").append("Mr Kitty");

    $("#story").show();

    event.preventDefault();
  })
});
// $(document).ready(function() {
//   $("#formOne").submit(function() {
//     var person1Input = $("input#person1").val();
//     var person2Input = $("input#person2").val();
//     var animalInput = $("input#animal").val();
//     var exclamationInput = $("input#exclamation").val();
//     var verbInput = $("input#verb").val();
//     var noun1Input = $("input#noun").val();

//     $(".person1").text(person1Input);
//     $(".person2").text(person2Input);
//     $(".animal").text(animalInput);
//     $(".exclamation").text(exclamationInput);
//     $(".verb").text(verbInput);
//     $(".noun").text(noun1Input);

//     $("#story").show();

//     event.preventDefault();
//   });
// });

$(document).ready(function() {
  $("#blanks form").submit(function() {
    // alert('Got to beginning of form submit!');
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      // console.log(userInput);
      $("." + blank).text(userInput).val();      
    });

    $("#story").show();
    // alert('Got to end of form submit!');

    event.preventDefault();
  });
});
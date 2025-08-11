$(document).ready(function(){

    $("ul#tree li ul").addClass("choices-collapsed"); // Hides subquestions at start

    $("#tree li input").click(function(event) { //Reveals subquestions for selected choice, hides choices not selected
      $(event.target).parent().addClass("choice-selected");
      $(event.target).nextAll().removeClass("choices-collapsed");
      $(event.target).parent().nextAll().addClass("choices-collapsed");
      $(event.target).parent().prevAll().addClass("choices-collapsed");
    });
  
  
    $("#goBack").click(function(event) { //Undoes last selection
       $('li.choice-selected:last').children("ul").addClass("choices-collapsed");
       $('li.choice-selected:last').nextAll().removeClass("choices-collapsed");
       $('li.choice-selected:last').prevAll().removeClass("choices-collapsed");
       $('li.choice-selected:last').removeClass("choice-selected").children("input").prop("checked",false);
    });

    $("#reset-tree").click(function(event) { //Resets to initial state
      $('#tree li').removeClass("choices-collapsed");
      $('#tree li').removeClass("choice-selected");
      $('#tree input').prop("checked",false);
      $("ul#tree li ul").addClass("choices-collapsed");
    });

});
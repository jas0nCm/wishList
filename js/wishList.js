$(document).ready(function() {
  $( ".selectable" ).selectable();

  $("#add").on("click", function() {
      $(".wishList").append("<li class='ui-widget-content'>item </li>");
  })

  $("#remove").on("click", function() {
    $(".ui-selected").remove();
  });
});

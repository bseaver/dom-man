$(function() {
var listItemCount = 0;

  $(".btn").click (function () {
    $(this).removeClass("btn-info");
    $(this).addClass("btn-success");
    listItemCount += 1;
    $(".list-row").children("ul").first().append("<li>List Item " + listItemCount + "</li>");
    $("li").last().click (function(){
//      alert("Remove Me");
      $(this).remove();
    });
  });

})

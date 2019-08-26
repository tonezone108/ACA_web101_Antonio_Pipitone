$(document).ready(function() {
  let $todolist = $("ul");
  let $newItemForm = $("#newItemForm");
  console.log($("#newItemForm"));
  $newItemForm.on("submit", function(e) {
    e.preventDefault();
    let entry = $('textarea[name="thingtodo"]').val();
    let date = $('input[name="date"]').val();
    let time = $('input[name="time"]').val();
    $todolist.append(`<li>${date} ${entry} @${time}       <span>X</span></li>`);
    $('input[type="text"]').val("");
  });

  $todolist.on("click", "li span", function() {
    let $this = $(this);
    console.log($this);
    $this.parent().remove();
  });
});

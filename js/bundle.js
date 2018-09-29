var input;

var delayInMilliseconds = 700; //0.7 second

setTimeout(function() {
  //your code to be executed after 0.7 second
  return 0;
}, delayInMilliseconds);

$("#submit").click(function() {
  input = $("#input").val();
  $("#submit").addClass("is-loading");

  if (input.toLowerCase() === "ok") {
    $("body").css("background", "rgba(60, 165, 60, 0.52)");
    $("#submit").removeClass("is-loading");

    var okText = $("<div></div>");
    okText.html("Signing Website is OK!");
    okText.addClass("ok tracking-in-expand");
    $("#columnOK")
      .empty()
      .append(okText);
  } else {
    $("body").css("background", "");
    $("#submit").removeClass("is-loading");
    var okText = $("<div></div>");
    okText.html("Error with " + "'" + input + "'");
    okText.addClass("ok tracking-in-expand");
    $("#columnOK")
      .empty()
      .append(okText);
  }
});

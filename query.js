$("#menu-toggle").click(function () {
  $("#menu").slideToggle(300);
});

$(window).resize(function () {
  if (window.innerWidth > 810) {
    $("#menu").show();
  } else {
    $("#menu").hide();
  }
});

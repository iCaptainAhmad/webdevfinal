let menuVisible = false;
$("#menu-toggle").click(function () {
  $("#menu").slideToggle(200);

  if (menuVisible == true) {
    $("#menu-toggle").attr("aria-label", "Open the menu");
    menuVisible = false;
  } else {
    $("#menu-toggle").attr("aria-label", "Close the menu");
    menuVisible = true;
  }

  console.log($("#menu-toggle").attr("aria-label"));
});

$(window).resize(function () {
  if (window.innerWidth > 650) {
    $("#menu").show();
  } else {
    $("#menu").hide();
  }
});
